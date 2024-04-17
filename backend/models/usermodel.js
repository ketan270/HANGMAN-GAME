const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

const newUser = new userModel({
    name: "Animesh sharma",
    email: "Animesh1@gmail.com",
    password: "123456678jj",
});

newUser.save()
    .then(() => console.log("User added successfully"))
    .catch(err => console.error("Error adding user:", err));

module.exports = userModel;
