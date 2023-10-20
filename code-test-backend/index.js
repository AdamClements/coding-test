const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

// GET endpoint
app.get("/users", (req, res) => {
  res.json(users);
});

const users = [];

const userValidationRules = [
  body("firstName")
    .isLength({ min: 1 })
    .trim()
    .withMessage("First name is required."),
  body("lastName")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Last name is required."),
  body("email").isEmail().trim().withMessage("Invalid email address."),
  body("age").isInt({ gt: 0 }).withMessage("Age must be a positive integer."),
];

// POST endpoint
app.post("/users", userValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = randomNumber();
  users.push({ ...req.body, id });

  res.json({ id });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function randomNumber() {
  return Math.floor(Math.random() * 10000) + 1;
}
