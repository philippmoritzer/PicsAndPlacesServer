//init router, middleware, and controller
const express = require("express");
const router = express.Router();

const categoryRouter = require("./categoryRouter");
const locationRouter = require("./locationRouter");
const tourRouter = require("./tourRouter");
const authRouter = require("./authRouter")
const userDataRouter = require("./userDataRouter");

//routes
router.use('/auth', authRouter);
router.use('/location', locationRouter);
router.use('/tour', tourRouter);
router.use('/category', categoryRouter);
router.use('/user', userDataRouter);

module.exports = router;
