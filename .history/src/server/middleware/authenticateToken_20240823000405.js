// middleware/authenticateToken.js

// Please note that this is a simplified example. In a real application, 
// you would need to handle more edge cases and security concerns. Also, 
// the exact paths and names of your routes and middleware may be 
// different, so you'll need to adjust the require() calls and app.use() 
// calls accordingly.

const User = require("../../server/mongodb");

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

module.exports = authenticateToken;


















// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }
// module.exports = authenticateToken;