const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const dotenv = require("dotenv");

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = "fjqa98wehf23şlkjrop212ke09f";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const posts = [];
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      posts: posts,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
    jwt.sign(
      { username, id: userDoc._id, posts: userDoc?.posts },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
          posts: userDoc?.posts,
        });
      }
    );
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const userDoc = await User.findOne({ username: info.username }).select(
      "_id username posts" //userin sadece _id,username ve posts arrayini getirmesi icin
    );
    // console.log(userDoc);
    res.json(userDoc);
    // res.json(info);
    // console.log(info);
  });
  //   res.json(req.cookies);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });

    const userDoc = await User.findById(info.id);
    userDoc.posts.push(postDoc);
    await userDoc.save();
    // console.log(postDoc);
    // console.log("--------------");
    // console.log(userDoc);
    res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

app.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDoc = await User.findById(id);
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
  // console.log(userDoc);
});

app.listen(4000);
