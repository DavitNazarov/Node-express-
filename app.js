import express from "express";
import pkg from "body-parser";
const { urlencoded } = pkg;

const app = express();

// Middleware to parse form data
app.use(urlencoded({ extended: false }));

// Serve the form
app.get("/", (req, res) => {
  res.send(`
    <form action="/create-user" method="POST">
      <input type="text" name="username" required>
      <button type="submit">Create User</button>
    </form>
  `);
});

// Handle form submission
app.post("/create-user", (req, res) => {
  res.send(`<h1>USER: ${req.body.username}</h1>`);
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
