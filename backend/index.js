const express =  require('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const userRoutes = require ('./routes/user.route.js');
const authRoutes = require ('./routes/auth.route.js');
const cookieParser= require ('cookie-parser');
const PORT = process.env.PORT || 3000;
const cors = require("cors");
// const path = require ('path');
dotenv.config();
const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

// const __dirname = path.resolve();



// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use(express.json());

app.use(cookieParser());



app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});