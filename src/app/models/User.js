const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      maxLength: 255,
      required: [true, "Please add your last name."],
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
