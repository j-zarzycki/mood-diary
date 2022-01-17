
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
    try {
        console.log(process.env.TOKEN_KEY);
        const { firstName, lastName, email, password } = req.body;
    
        if (!(email && password && firstName && lastName)) {
          res.status(400).send("All input is required");
        }
    
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        encryptedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
          firstName,
          lastName,
          email: email.toLowerCase(), 
          password: encryptedPassword,
        });
    

        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
     
        user.token = token;

        res.status(201).json({
            status: 'success',
            user: user
        });
      } catch (err) {
        console.log(err);
      }
}


exports.login = async(req, res, next) => {
     
  try {
    
    const { email, password } = req.body;

    
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    
    const user = await User.findOne({ email }).select('+password');

    console.log("PASSWORD = ", password);
    console.log("USER.PASSWORD =", user.password);

    if (user && (await bcrypt.compare(password, user.password))) {
     
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

     
      user.token = token;

   
      res.status(200).json({
        user,
        token
      });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}


exports.protect = async(req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
}