const router = require("express").Router();
const { User } = require("../../models/");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});
