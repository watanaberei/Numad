import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { User, Store } from "./mongodb.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
    credentials: true
  }
});

app.use(cors({
  origin: 'http://localhost:3000', // or whatever your frontend URL is
  credentials: true
}));
app.use(express.json());

let refreshTokens = [];

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/impression', authenticateToken, async (req, res) => {
  console.log('Received impression request:', req.body);
  const { storeId, action } = req.body;
  const userEmail = req.user.email;

  console.log('User email:', userEmail);
  console.log('Store ID:', storeId);
  console.log('Action:', action);

  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      console.log('User not found:', userEmail);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user);

    let store = await Store.findOne({ storeId });
    if (!store) {
      console.log('Store not found, creating new store:', storeId);
      store = new Store({ storeId });
    }

    console.log('Store before update:', store);

    const impressionUpdate = handleImpression(user, store, action, storeId);
    
    console.log('User before save:', user);
    console.log('Store before save:', store);

    await user.save();
    await store.save();

    console.log('Impression update successful');
    console.log('Updated user:', user);
    console.log('Updated store:', store);

    io.emit('impression_update', { storeId, ...impressionUpdate });

    res.status(200).json({ message: 'Impression added successfully', ...impressionUpdate });
  } catch (error) {
    console.error('Error adding impression:', error);
    res.status(500).json({ message: 'Error adding impression', error: error.message });
  }
});


function handleImpression(user, store, action, storeId) {
  console.log('Handling impression:', { user: user._id, store: store._id, action, storeId });

  let likes = store.likes;
  let dislikes = store.dislikes;

  switch (action) {
    case 'like':
      if (!user.likedStores.includes(storeId)) {
        user.likedStores.push(storeId);
        user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
        likes++;
        if (user.dislikedStores.includes(storeId)) {
          dislikes--;
        }
      }
      break;
    case 'dislike':
      if (!user.dislikedStores.includes(storeId)) {
        user.dislikedStores.push(storeId);
        user.likedStores = user.likedStores.filter(id => id !== storeId);
        dislikes++;
        if (user.likedStores.includes(storeId)) {
          likes--;
        }
      }
      break;
  }

  store.likes = likes;
  store.dislikes = dislikes;

  console.log('Impression handled:', { likes, dislikes });

  return { likes, dislikes };
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token is required' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Access token is not valid' });
    }
    req.user = user;
    next();
  });
}

const authPort = process.env.AUTHPORT || 4000;
httpServer.listen(authPort, () => console.log(`authServer running on port ${authPort}`));