// controllers/userController.js
const User = require("../models/User");

const testController = (req, res) => {
    res.send("UserController test endpoint is working!");
};

const saveUser = async (req, res) => {
    try {
        const { name, age, address, mobile } = req.body; // Assume data is in req.body
        const newUser = new User({ name, age, address, mobile });
        await newUser.save();
        res.status(201).json({ message: 'User saved successfully!', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error saving user', details: error.message });
    }
};


module.exports = {
    testController,
    saveUser,
};
