const mongoose = require("mongoose")


const userModel = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    profilePic: String,
    role:String,

},
{timestamps: true})


module.exports = mongoose.model("User", userModel)