require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const investRouter = require("./routes/invest");
const stripeRouter = require("./routes/stripe");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/invest", investRouter);
app.use("/", stripeRouter);

app.listen(8000, () => {
  console.log("the server is starting in port 8000");
});

mongoose
  .connect("mongodb://localhost:27017/mc-hack")
  .then(() => console.log("Connecting MongoDB"))
  .catch((err) => console.log(err));
