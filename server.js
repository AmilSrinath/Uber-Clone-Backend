// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb+srv://amil:9Adb2cD3@cluster0.g0vgm.mongodb.net/uber_clone_db?retryWrites=true&w=majority")
    .then(() => console.log("Connected"))
    .catch((err) => console.log("Not Connected"));


app.use(express.json());

// Use userRoutes
app.use("/api/user", require("./routes/userRoutes"));  // Ensure this path is correct

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
