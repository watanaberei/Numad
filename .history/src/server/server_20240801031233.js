import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import path from 'path';
import User from "../server/mongodb.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';

app.use(cors({
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000','http://localhost:6000', 'http://127.0.0.1:3000/account', 'http://localhost:3000/account', 'http://localhost:6000/account']
}));
app.use(express.json());

app.get('/signup', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/client/screens/SignupScreen.js'));
});

// app.post('/account', async (req, res) => {
//    const email = req.body.email;
//    const user = await User.findOne({ email: email });
 
//    if (user) {
//      res.json({ userExists: true });
//    } else {
//      res.json({ userExists: false });
//    }
//  });

app.post('/signup', checkNotAuthenticated, async (req, res) => {
   const email = req.body.email;
   const password = req.body.password; 
   const hashedPassword = await bcrypt.hash(password, 10);
 
   const newUser = new User({
     email: email,
     password: hashedPassword
   });
 
   newUser.save()
   .then(() => {
     res.json({ message: 'User created' });
   })
   .catch(err => {
     console.error(err);
     res.status(500).send('Server error');
   });
 });

app.get('/posts', authenticateToken, (req, res) => {
   res.json(posts.filter(post => post.user === req.user.user))
})

const port = process.env.SERVERPORT || 6000;
app.listen(port, () => console.log(`Server running on port ${port}`));

function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]
   if (token == null) return res.sendStatus(401)

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
  
      req.user = user;
      next(); // pass the execution off to whatever request the client intended
    });
}

function checkNotAuthenticated(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
 
   if (token) {
     return res.redirect('/user');
   }
 
   next();
 }