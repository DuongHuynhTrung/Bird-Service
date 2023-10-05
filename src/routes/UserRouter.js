const express = require("express");
const bodyParser = require("body-parser");
const userRouter = express.Router();
userRouter.use(bodyParser.json());
const {
  registerUser,
  forgotPassword,
  resetPassword,
} = require("../app/controllers/UserController");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          fullName:
 *            type: string
 *            description: enter your last name
 *            example: Customer
 *          email:
 *            type: string
 *            description: enter your email
 *            example: trungduong@gmail.com
 *          password:
 *            type: string
 *            description: enter your password
 *            example: 123456
 *          role_id:
 *            type: string
 *            description: enter your role_id
 *            example: Customer
 */

/**
 * @swagger
 * /api/users/register:
 *  post:
 *    tags:
 *      - Users
 *    summary: Register new Customer
 *    description: Register new Customer
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                  type: string
 *                  description: enter your last name
 *                  example: Duong
 *               email:
 *                  type: string
 *                  description: enter your email
 *                  example: trungduong@gmail.com
 *               password:
 *                  type: string
 *                  description: enter your password
 *                  example: 123456
 *               roleName:
 *                  type: string
 *                  description: enter your password
 *                  example: Customer
 *    responses:
 *      201:
 *        description:  Register Successfully!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Register Successfully!
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/User'
 *      400:
 *        description: All field not be empty! OR User has already registered with Email! OR User has already registered with Phone Number! OR User data is not Valid!
 *
 */

userRouter.route("/register").post(registerUser);

/**
 * @swagger
 * /api/users/forgotPassword:
 *  post:
 *    tags:
 *      - Users
 *    summary: User Forgot Password Can Get OTP to Reset
 *    description: User Forgot Password Can Get OTP to Reset
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  description: enter your email
 *                  example: abc@gmail.com
 *    responses:
 *      200:
 *        description:  Send mail OTP successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Send mail OTP successfully

 *      400:
 *        description: User not Found
 *
 */
userRouter.post("/forgotPassword", forgotPassword);

/**
 * @swagger
 * /api/users/resetPassword:
 *  post:
 *    tags:
 *      - Users
 *    summary: User verify OTP and receive new password in email
 *    description: User verify OTP and receive new password in email
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  description: enter your email
 *                  example: abc@gmail.com
 *               otp:
 *                  type: string
 *                  description: enter OTP
 *                  example: 235122
 *    responses:
 *      200:
 *        description:  Reset password successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Reset password successfully

 *      400:
 *        description: User not Found
 *
 */
userRouter.post("/resetPassword", resetPassword);

module.exports = userRouter;
