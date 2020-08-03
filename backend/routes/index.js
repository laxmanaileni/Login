var express = require("express");
var router = express.Router();

//No database so we create Dummy Data
var users = [
  {
    id: { email: "abc@gmail.com",  phone: 9999999999,  name: "Naruto" },
    password: "password"
  },
  {
    id: { email: "a@gmail.com", phone: 9876543210, name: "Hinata" },
    password: "abcd"
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("Welcome to backend server We got it");
});

router.post("/login", (req, res, next) => {
  let result = users.find(
    (user) =>
      user.id.email == req.body.email ||
      user.id.phone == req.body.phone ||
      user.id.name == req.body.email
  );
  console.log(result);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({ message: "Successful login!!!" });
    } else {
      res.status(200).send({ message: "Invalid Password!! Try Again" });
    }
  } else {
    res.status(200).send({ message: "User not found!!" });
  }
});

module.exports = router;
