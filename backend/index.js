const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const errorHandler = require("./middlewares/errorHandler");
dotenv.config();

app.use(express.json());
app.use(cookieParser);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB successfully !");
}).catch((err) => {
    console.log(err);
})
// app.get("/", (req, res) => {
//     res.send("Hello world !");
// })

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Error handler middleware
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})