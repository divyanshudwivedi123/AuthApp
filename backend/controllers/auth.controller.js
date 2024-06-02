const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    // the below code can be also written using try-catch instead of .then and .catch
    await newUser.save().then(() => {
        res.status(201).json({message: "User created successfully !"});
    }).catch((err) => {
        res.status(500).json(err.errmsg);
    });
    
}

module.exports = signup;