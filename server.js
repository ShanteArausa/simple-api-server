const express = require("express");
const app = express();

app.use(express.json());

// Fake database
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 700 }
];

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Simple API Server Running 🚀" });
});

// Users route
app.get("/users", (req, res) => {
  res.json(users);
});

// Create new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// Products route
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});