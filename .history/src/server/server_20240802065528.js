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

// const jwt = require('jsonwebtoken')
// const User = require('.src/mongodb');

app.use(cors());
app.use(express.json());




app.get('/signup', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/client/screens/SignupScreen.js'));
});

const posts = [
   {
      email: 'to.reiwatanabe@gmail.com',
      password: '123456'
   },
   {
      email: 'wannabearay@gmail.com',
      password: '7891011'
   }
]


app.post('/account', async (req, res) => {
   const email = req.body.email;
 
   const user = await User.findOne({ email: email });
 
   if (user) {
     res.json({ userExists: true });
   } else {
     res.json({ userExists: false });
   }
 });
 
 
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
      next(); // pass the execution off to whatever request the client intended
    });
}


const port = process.env.SERVERPORT || 5000;
// const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));






























function checkNotAuthenticated(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
 
   if (token) {
     return res.redirect('/user');
   }
 
   next();
 }



















