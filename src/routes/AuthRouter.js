const express = require("express");
const authRouter = express.Router();
const loginLimiter = require("../app/middleware/loginLimiter");
const passport = require("passport");
const { login } = require("../app/controllers/AuthController");

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    tags:
 *      - Authentications
 *    summary: Login with email & password to get accessToken in 15m
 *    description: Login with email & password to get accessToken in 15m (Throw Error if login more than 5 times in 1 minute)
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
 *                  example: trungduong@gmail.com
 *               password:
 *                  type: string
 *                  description: enter your password
 *                  example: 123456
 *    responses:
 *      200:
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accessToken:
 *                  type: string
 *                  description: access token
 *                  example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJOYW1lIjoiRHVvbmciLCJlbWFpbCI6InRydW5nZHVvbmdAZ21haWwuY29tIiwiaWQiOiI2M2UwODNhYjVjMTYyMzcwNjU2YTE0OTQifSwiaWF0IjoxNjc1ODQxNzE0LCJleHAiOjE2NzU4NDI2MTR9.cDeimio_-xU9HmdJ5E0DemwjHnCPKhnE6nIraNOv81geyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJOYW1lIjoiRHVvbmciLCJlbWFpbCI6InRydW5nZHVvbmdAZ21haWwuY29tIiwiaWQiOiI2M2UwODNhYjVjMTYyMzcwNjU2YTE0OTQifSwiaWF0IjoxNjc1ODQxNzE0LCJleHAiOjE2NzU4NDI2MTR9.cDeimio_-xU9HmdJ5E0DemwjHnCPKhnE6nIraNOv81g
 *      401:
 *        description: Email or Password is not Valid!
 *      429:
 *        description: Too many login attempts from this IP, please try again after a 60 second pause
 *
 */

authRouter.route("/login").post(loginLimiter, login);

module.exports = authRouter;
