// src/server/server.js
import dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
const app = express();

import path from 'path';
import http from 'http';
import User from "../server/mongodb.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

let bisectRight;
import('d3').then(d3 => {
  bisectRight = d3.bisectRight;
});

app.use(cors());
app.use(express.json());

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/client/screens/SignupScreen.js'));
});

const posts = [
  { email: 'to.reiwatanabe@gmail.com', password: '123456' }, 
  { email: 'wannabearay@gmail.com', password: '7891011' }
]

app.get('/check-email', async (req, res) => {
  const email = req.query.email;

  const user = await User.findOne({ email: email });

  if (user) {
    res.json({ emailExists: true });
  } else {
    res.json({ emailExists: false });
  }
});

// app.post('/account', async (req, res) => {
//   const email = req.body.email;

//   const user = await User.findOne({ email: email });

//   if (user) {
//     res.json({ userExists: true });
//   } else {
//     res.json({ userExists: false });
//   }
// });

app.post('/signup', checkNotAuthenticated, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email: email, password: hashedPassword });

  newUser.save().then(() => {
    res.json({ message: 'User created' });
  }).catch(err => {
    console.error(err);
    res.status(500).send('Server error');
  });
});

app.get('/posts', authenticationToken, (req, res) => { 
  res.json(posts.filter(post => post.user === req.user.user)) 
})

function authenticationToken(req, res, next) {
  const authHeader = req.headers['authorization'] 
  const token = authHeader && authHeader.split(' ')[1] 
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


// app.post('/account', async (req, res) => {
//   const { email, password } = req.body;

//   if (type === 'signup') {
//     const user = await User.findOne({ email });

//     if (user) {
//       // User already exists
//       res.status(400).json({ message: 'Email already taken' });
//     } else {
//       // Create new user
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new User({ email, password: hashedPassword });
//       await newUser.save();

//       res.status(201).json({ message: 'User created successfully' });
//     }
//   } else if (type === 'login') {
//     const user = await User.findOne({ email });

//     if (user && await bcrypt.compare(password, user.password)) {
//       // User found and password correct
//       res.json({ message: 'Login successful' });
//     } else {
//       // User not found or password incorrect
//       res.status(401).json({ message: 'Email or password incorrect' });
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid type' });
//   }
// });

const port = process.env.SERVERPORT || 6000;
app.listen(port, () => console.log(`Server running on port ${port}`));

function checkNotAuthenticated(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    return res.redirect('/user');
  }

  next();
} 