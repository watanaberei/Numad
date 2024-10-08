// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import http from 'http';
// import User from "./mongodb.js";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// // import jwt from 'jsonwebtoken';

// const app = express();
// app.use(cors());
// app.use(express.json());
import dotenv from 'dotenv';
import { Server } from 'socket.io';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
// import User from "./mongodb.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { User, Store } from "./mongodb.js";

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Replace with your client's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
    credentials: true
  }
});

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Be more specific in production
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());


let bisectRight;
import('d3').then(d3 => {
  bisectRight = d3.bisectRight;
});


//fix this for production
let refreshTokens = []



app.post('/login', async (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
 
   const user = await User.findOne({ email: email });
 
   if (user && await bcrypt.compare(password, user.password)) {
     const accessToken = jwt.sign({ user: user.email }, process.env.ACCESS_TOKEN_SECRET);
     res.json({ accessToken: accessToken });
   } else {
     res.status(401).send('Login failed');
   }
 });


// app.post('/login', async (req, res) => {
//    const { email, password } = req.body;
 
//    const user = await User.findOne({ email });
//    if (!user) {
//      return res.status(404).json({ message: 'User not found' });
//    }
 
//    const isMatch = await bcrypt.compare(password, user.password);
//    if (!isMatch) {
//      return res.status(400).json({ message: 'Invalid password' });
//    }
 
//    const accessToken = generateAccessToken({ name: user.email });
//    const refreshToken = jwt.sign({ name: user.email }, process.env.REFRESH_TOKEN_SECRET);
//    refreshTokens.push(refreshToken);
 
//    res.json({ accessToken, refreshToken });
//  });




 app.get('/user', authenticateToken, async (req, res) => {
   const user = await User.findOne({ email: req.user.name });
   if (!user) {
     return res.status(404).json({ message: 'User not found' });
   }
 
   res.json({
     firstName: user.firstName,
     lastName: user.lastName,
     birthdate: user.birthdate
   });
 });

 app.post('/profile', authenticateToken, async (req, res) => {
   const { firstName, lastName, birthdate } = req.body;
 
   const user = await User.findOne({ email: req.user.name });
   if (!user) {
     return res.status(404).json({ message: 'User not found' });
   }
 
   user.firstName = firstName;
   user.lastName = lastName;
   user.birthdate = birthdate;
   await user.save();
 
   res.json({ message: 'Profile updated successfully' });
 });
// app.post('/login', (req, res) => {
//    const email = req.body.email;
//    const password = req.body.password; // Assuming you're sending password in the request

//    User.findOne({ email: email })
//       .then(user => {
//          if (!user) {
//             return res.status(404).send('User not found');
//          }

//          // Check password
//          bcrypt.compare(password, user.password)
//             .then(isMatch => {
//                if (!isMatch) {
//                   return res.status(400).send('Invalid password');
//                }

//                // User is authenticated, generate tokens
//                const userForToken = { name: user.email };
//                const accessToken = generateAccessToken(userForToken);
//                const refreshToken = jwt.sign(userForToken, process.env.REFRESH_TOKEN_SECRET);
//                refreshTokens.push(refreshToken);
//                res.json({ accessToken: accessToken, refreshToken: refreshToken });
//             });
//       })
//       .catch(err => {
//          console.error(err);
//          res.status(500).send('Server error');
//       });
// });


app.post('/token', (req, res) => {
   const { token: refreshToken } = req.body;
 
   if (!refreshToken || !refreshTokens.includes(refreshToken)) {
     return res.status(403).json({ message: 'Refresh token is not valid' });
   }
 
   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
     if (err) {
       return res.status(403).json({ message: 'Refresh token is not valid' });
     }
 
     const accessToken = generateAccessToken({ name: user.name });
     res.json({ accessToken });
   });
 });

// app.post('/token', (req, res) => {
//    const refreshToken = req.body.token
//    if (refreshToken == null) return res.sendStatus(401)
//    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403)
//       const accessToken = generateAccessToken({ 
//       name: user.name })
//       res.json({ accessToken: accessToken })
//    })
// })

// app.delete('/logout', (req, res) => {
//    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//    res.sendStatus(204)
// })




// app.post('/login',  (req, res) => {
//    // Authenticate the user

//    const email = req.body.email
//    const user = { name: email }

//    const accessToken = generateAccessToken(user)
//    const refreshToken = jwt.sign(user, 
//    process.env.REFRESH_TOKEN_SECRET)
//    refreshTokens.push(refreshToken)a
//    res.json({ accessToken: accessToken, 
//       refreshToken: refreshToken }) 
   
// })


// app.post('/api/sync-impressions', authenticateToken, async (req, res) => {
//   const { impressions } = req.body;
//   const userId = req.user.id;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     const storeUpdates = {};

//     for (let impression of impressions) {
//       const { storeId, action } = impression;

//       if (!storeUpdates[storeId]) {
//         storeUpdates[storeId] = { likes: 0, dislikes: 0 };
//       }

//       switch (action) {
//         case 'like':
//           if (!user.likedStores.includes(storeId)) {
//             user.likedStores.push(storeId);
//             storeUpdates[storeId].likes += 1;
//           }
//           user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
//           break;
//         case 'unlike':
//           user.likedStores = user.likedStores.filter(id => id !== storeId);
//           storeUpdates[storeId].likes -= 1;
//           break;
//         case 'dislike':
//           if (!user.dislikedStores.includes(storeId)) {
//             user.dislikedStores.push(storeId);
//             storeUpdates[storeId].dislikes += 1;
//           }
//           user.likedStores = user.likedStores.filter(id => id !== storeId);
//           break;
//         case 'undislike':
//           user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
//           storeUpdates[storeId].dislikes -= 1;
//           break;
//       }
//     }

//     // Bulk update stores
//     const bulkOps = Object.entries(storeUpdates).map(([storeId, updates]) => ({
//       updateOne: {
//         filter: { storeId },
//         update: { $inc: { likes: updates.likes, dislikes: updates.dislikes } },
//         upsert: true
//       }
//     }));

//     await Store.bulkWrite(bulkOps);
//     await user.save();

//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error syncing impressions:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });


 app.delete('/logout', authenticateToken, (req, res) => {
   const { token: refreshToken } = req.body;
 
   refreshTokens = refreshTokens.filter(token => token !== refreshToken);
   console.log(`User ${req.user.name} has been logged out`);
   res.sendStatus(204);
 });





 app.post('/api/impression', authenticateToken, async (req, res) => {
  const { storeId, action } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let store = await Store.findOne({ storeId });
    if (!store) {
      store = new Store({ storeId });
    }

    if (action === 'like') {
      if (user.likedStores.includes(storeId)) {
        return res.status(400).json({ success: false, message: 'Store already liked' });
      }
      user.likedStores.push(storeId);
      user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
      store.likes += 1;
      if (user.dislikedStores.includes(storeId)) {
        store.dislikes -= 1;
      }
    } else if (action === 'dislike') {
      if (user.dislikedStores.includes(storeId)) {
        return res.status(400).json({ success: false, message: 'Store already disliked' });
      }
      user.dislikedStores.push(storeId);
      user.likedStores = user.likedStores.filter(id => id !== storeId);
      store.dislikes += 1;
      if (user.likedStores.includes(storeId)) {
        store.likes -= 1;
      }
    }

    await user.save();
    await store.save();

    res.json({ success: true, likes: store.likes, dislikes: store.dislikes });
  } catch (error) {
    console.error('Error updating impression:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});





 app.post('/api/sync-impressions', authenticateToken, async (req, res) => {
  const { impressions } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const storeUpdates = {};

    for (let impression of impressions) {
      const { storeId, action } = impression;

      if (!storeUpdates[storeId]) {
        storeUpdates[storeId] = { likes: 0, dislikes: 0 };
      }

      switch (action) {
        case 'like':
          if (!user.likedStores.includes(storeId)) {
            user.likedStores.push(storeId);
            storeUpdates[storeId].likes += 1;
          }
          user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
          break;
        case 'unlike':
          user.likedStores = user.likedStores.filter(id => id !== storeId);
          storeUpdates[storeId].likes -= 1;
          break;
        case 'dislike':
          if (!user.dislikedStores.includes(storeId)) {
            user.dislikedStores.push(storeId);
            storeUpdates[storeId].dislikes += 1;
          }
          user.likedStores = user.likedStores.filter(id => id !== storeId);
          break;
        case 'undislike':
          user.dislikedStores = user.dislikedStores.filter(id => id !== storeId);
          storeUpdates[storeId].dislikes -= 1;
          break;
      }
    }

    // Bulk update stores
    const bulkOps = Object.entries(storeUpdates).map(([storeId, updates]) => ({
      updateOne: {
        filter: { storeId },
        update: { $inc: { likes: updates.likes, dislikes: updates.dislikes } },
        upsert: true
      }
    }));

    await Store.bulkWrite(bulkOps);
    await user.save();

    // Emit real-time updates
    for (let [storeId, updates] of Object.entries(storeUpdates)) {
      io.emit('impression_update', { storeId, ...updates });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error syncing impressions:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Use httpServer instead of app.listen
// const PORT = process.env.PORT || 3000;
// httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// Use httpServer instead of app.listen
const authPort = process.env.AUTHPORT || 4000;
httpServer.listen(authPort, () => console.log(`authServer running on port ${authPort}`));













function generateAccessToken(user) {
   return jwt.sign(user, 
      process.env.ACCESS_TOKEN_SECRET, { expiresIn: 
         '1500s' }) // { expiresIn: '1500s' })
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

 function checkAuthenticated(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
 
   if (!token) {
     return res.redirect('/login');
   }
 
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if (err) {
       return res.redirect('/login');
     }
 
     req.user = user;
     next();
   });
 }

//  function checkNotAuthenticated(req, res, next) {
//    const authHeader = req.headers['authorization'];
//    const token = authHeader && authHeader.split(' ')[1];
 
//    if (token) {
//      return res.redirect('/user');
//    }
 
//    next();
//  }