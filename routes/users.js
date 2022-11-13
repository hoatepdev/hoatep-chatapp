const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//get a user
router.get("/", async (req, res) => {
  const { userId, username } = req.query;

  try {
    const user = User.findById(userId);
    const { password, updatedAt, ...rest } = user;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
});

// sign up
router.post("/", async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  console.log(username, password);

  const _user = new User({
    username,
    password,
    email,
  });

  _user.save((err, user) => {
    if (err) return res.status(400).json({ message: err });
    if (user) {
      const { _id, username } = user;

      return res.status(201).json({
        user: { _id, username },
      });
    }
  });

  try {
  } catch (error) {}
});

module.exports = router;
