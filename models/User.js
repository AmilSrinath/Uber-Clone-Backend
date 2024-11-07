// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
