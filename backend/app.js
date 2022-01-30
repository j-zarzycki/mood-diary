const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const postRouter = require('./routes/postRoute');
const authRouter = require('./routes/userRoute')
const cors = require('cors')

app.use(cors());
app.use(express.json({limit: '10kb'}));
app.use(cookieParser());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

  app.use('/api/v1/post', postRouter);
  app.use('/api/v1/', authRouter);
  
  
  app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

module.exports = app;