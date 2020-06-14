const express = require("express");
const router = express.Router();

//routes
const categoryRouter = require("./categoryRouter");
const locationRouter = require("./locationRouter");
const tourRouter = require("./tourRouter");
const userRouter = require("./userRouter")
const userDataRouter = require("./userDataRouter");

router.use('/auth', userRouter);
router.use('/location', locationRouter);
router.use('/tour', tourRouter);
router.use('/category', categoryRouter);
router.use('/user', userDataRouter);

module.exports = router;
