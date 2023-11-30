const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        validate: {
            validator: function (value) {
                // Regular expression for a Bangladesh phone number (assumed 11 digits)
                const phoneRegex = /^01[3-9]\d{8}$/;
                return phoneRegex.test(value.toString());
            },
            message: props => `${props.value} is not a valid Bangladesh phone number!`
        },
        required: true,
        unique: true,
    },
    password: {
        type: String, // Corrected the missing "type" declaration
        required: true,
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User; // Corrected the module.exports statement
