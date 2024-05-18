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


// app.post('/signup', checkNotAuthenticated, async (req, res) => {
//    console.log(req.body); // Add this line
//    const email = req.body.email;
//    const password = req.body.password; // Assuming you're sending password in the request
 
//    // Hash the password
//    const hashedPassword = await bcrypt.hash(password, 10);
 
//    // Create new user
//    const newUser = new User({
//       email: email,
//       password: hashedPassword
//    });

//    newUser.save()
//   .then(() => {
//     res.json({ message: 'User created' });
//   })
//   .catch(err => {
//     console.error(err);
//     res.status(500).send('Server error');
//   });
//    // Save the user in MongoDB
//    // newUser.save()
//    //    .then(() => res.json({ message: 'User created' }))
//    //    .catch(err => {
//    //       console.error(err);
//    //       res.status(500).send('Server error');
//    //    });
       
//    // res.send('Signup successful');
//  });


// app.post('/signup', async (req, res) => {
//    console.log(req.body); // Add this line
//    const email = req.body.email;
//    const password = req.body.password; // Assuming you're sending password in the request

//    // Hash the password
//    const hashedPassword = await bcrypt.hash(password, 10);

//    // Create new user
//    const newUser = new User({
//       email: email,
//       password: hashedPassword
//    });

//    // Save the user in MongoDB
//    newUser.save()
//       .then(() => res.json({ message: 'User created' }))
//       .catch(err => {
//          console.error(err);
//          res.status(500).send('Server error');
//       });
      
//    res.send('Signup successful');
// });

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

// function authenticationToken(req, res, nex) {
//    const authHeader = req.headers['authorization']
//    const token = authHeader && authHeader.split(' ')[1]
//    if (token == null) return res.sendStatus(401)

//    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403)
//       req.user = user
//       nex()
//    })
// }

// const port = process.env.PORT || 3000;
const port = process.env.SERVERPORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));






























function checkNotAuthenticated(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
 
   if (token) {
     return res.redirect('/user');
   }
 
   next();
 }





























// // Import your routes and middleware
// const authenticateToken = require('./middleware/authenticateToken');
// const authRoutes = require('./routes/authRoutes');
// const protectedRoutes = require('./routes/protectedRoutes');
// const userRoutes = require('./routes/userRoutes');
// const homeRoutes = require('./routes/homeRoutes');
// const detailRoutes = require('./route mainRoutes');

// // Serve static files from the "src" directory
// app.use(express.static(path.join(__dirname, 'src/screens/')));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Use your routes
// app.use('/auth', authRoutes);
// app.use('/protected', authenticateToken, protectedRoutes);
// app.use('/user', userRoutes);
// app.use('/', homeRoutes);
// app.use('/detail', detailRoutes);
// app.use('/main', mainRoutes);

// console.log('authRoutes:', authRoutes);
// console.log('protectedRoutes:', protectedRoutes);
// console.log('userRoutes:', userRoutes);
// console.log('homeRoutes:', homeRoutes);
// console.log('detailRoutes:', detailRoutes);
// console.log('mainRoutes:', mainRoutes);

// // Serve the index.html file for all routes
// app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'src/index.html'));
// });

// const server = {
//    httpServer: http.createServer(app),
//    init: function() {
//      const port = 3000;
//      this.httpServer.listen(port, function() {
//        console.log(`Server is up on port ${port}.`);
//      });
//    }
// }
 
// server.init();
