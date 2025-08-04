import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
    accountVerified: { type: Boolean, default: false },
    borrowedBooks: [
        {
            bookId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Borrow",
                
            },
            returned: {
                type: Boolean,
                default: false,
            },
            bookTitle: String,
            borrowedDate: Date,
            dueDate: Date,
        },
    ],

    avatar: {
        public_id: String,
        url: String,
    },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},
    {
        timestamps: true,
    }

);


// Define a method to generate a random 5-digit OTP for email verification
userSchema.methods.generateVerificationCode = function () {
    function generateRandomeFiveDigitNumber() {
        const firstDigit = Math.floor(Math.random() * 9) + 1; // First digit (1–9) to avoid starting with 0
        // Generate 4 random digits and pad with 0s if needed
        const remainingDigits = Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, 0);

        return parseInt(firstDigit + remainingDigits);
    }


    const verificationCode = generateRandomeFiveDigitNumber();
    this.verificationCode = verificationCode;

    // Sets the code and its expiration time (15 minutes from now) on the user document
    this.verificationCodeExpire = Date.now() + 15 * 60 * 1000;

    return verificationCode;
};




// Method added to every user instance to generate a JWT token
userSchema.methods.generateToken = function () {
    return jwt.sign(
        { id: this._id },                  
        process.env.JWT_SECRET_KEY,      
        {
            expiresIn: process.env.JWT_EXPIRE, 
        }
    );
};


userSchema.methods.getResetPasswordToken = function () {
    
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
};


export const User = mongoose.models.User || mongoose.model("User", userSchema);


