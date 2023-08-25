const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "",
    password: "",
    database: "Facial_Recognition",
  },
});

const register = require("./controllers/register");
const signIn = require("./controllers/signIn");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY_CLARIFAI;

const app = express();
app.use(cors());
app.use(express.json());

// / GET --> res = 'root path'
app.get("/", (req, res) => {
  res.json("root path");
});

// /signin route	--> POST = success/fail
app.post("/signin", (req, res) => {
  signIn.handleSignIn(req, res, db, bcrypt);
});

// /register route	--> POST = user
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

// /profile/:userId --> GET = user
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

// /image --> PUT --> user
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res, apiKey);
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
