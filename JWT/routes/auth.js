const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const User = require("../Model/user");
const user = require("../Model/user");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists!");

  const salt = await bcrypt.genSalt(8);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/signin", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const userCheck = await User.findOne({ email: req.body.email });
  if (!userCheck) return res.status(400).send("Email doesn't  exist!");

  const validPass = await bcrypt.compare(req.body.password, userCheck.password);
  if (!validPass) return res.status(400).send("Invalid Password!");

  //create jwt
  const token = jwt.sign({ _id: userCheck._id }, process.env.TOKEN_SECRET);

  // const myHeaders = new Headers();

  // myHeaders.set("auth-token", token);

  res.header("auth-token", token).send(token);

  // res.send("Logged In!!");
});

module.exports = router;
