const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
dotenv.config();
app.use(express.json());

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
app.listen(3000, () => {
    console.log(`Server is running at port ${PORT}`);
})