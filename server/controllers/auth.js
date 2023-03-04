const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      fieldWork,
      bio,
      role,
      phone,
    } = req.body;
    console.log(req.body);
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !fieldWork ||
      !role
    ) {
      return res
        .status(400)
        .json({ message: "U need more Informations about You !!" });
    }
    if (role === "admin") {
      return res.status(401).json({ message: "You can't sign up as Admin !!" });
    }
    if (role !== "entrepreneur" && role !== "investisteur") {
      return res.status(400).json({ message: "this role does not exist !!" });
    }
    const isExisting = await User.findOne({ email });
    if (isExisting) {
      return res
        .status(400)
        .json({ message: "this email is already exists !!" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "the passwords are incorrects !!" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });
    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role, userName: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).cookie("token", token).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "U need more Informations about You !!" });
    }

    const isExisting = await User.findOne({ email });
    if (!isExisting) {
      return res.status(404).json({ message: "this email does not exists !!" });
    }
    console.log(isExisting);
    const isValidPass = await bcrypt.compare(password, isExisting.password);
    if (!isValidPass) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      {
        userId: isExisting._id,
        role: isExisting.role,
        userName: isExisting.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).cookie("token", token).json({ user: isExisting, token });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { signUp, signIn };
