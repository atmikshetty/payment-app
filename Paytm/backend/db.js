// import the mongoose and express libraries
const mongoose = require("mongoose");
const express = require("express");

// create an instance of express
app = express();

app.use(express.json());

// database url
mongoose.connect("mongodb+srv://admin:bsqJyWST0KLay1mk@cluster0.ba8sksh.mongodb.net/projects?readPreference=primary")

// user schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
})

// user model
const User = mongoose.model("Users", userSchema);

// Routes
// Signup

app.post("/signup", async(req,res) => {

    console.log(req.body);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    // check if the user already exists through the username
    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400).send("User already exists!")
    }

    // creating a new user
    const user = new User({firstName, lastName, email: username, password})
    await user.save();


    res.json({
        msg: "User created Successfully!!!"
    })
})

app.listen(3000);

module.exports = {
    User
}