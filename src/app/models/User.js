const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: 255,
      required: [true, "Please add your first name."],
    },
    lastName: {
      type: String,
      maxLength: 255,
      required: [true, "Please add your last name."],
    },
    gender: {
      type: String,
    },
    dob: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: Number,
      maxLength: 10,
    },
    email: {
      type: String,
      maxLength: 255,
      required: [true, "Please add your email."],
      unique: [true, "Email address has already taken."],
    },
    password: {
      type: String,
    },
    imgURL: {
      type: String,
    },
    profit: {
      type: Number,
    },
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: [true],
    },
    status: {
      type: Boolean,
      default: true,
    },
    otp: {
      type: Number,
    },
    otpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
