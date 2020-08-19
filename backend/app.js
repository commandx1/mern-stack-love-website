const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user-router");
const memoryRoutes = require("./routes/memory-router");
const aboutRoutes = require("./routes/about-router");
const poemRoutes = require("./routes/poem-router");
const telltaleRoutes = require("./routes/telltale-router");
const HttpError = require("./models/http-error");
const fileRoutes = require("./routes/file-router");
const categoryRoutes = require("./routes/blog/category-router")
const blogRoutes = require("./routes/blog/blog-router")
const commentRoutes = require("./routes/blog/comment-router")
const replyRoutes = require("./routes/blog/reply-router")
const DB = require("./env_variables")

const app = express();

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", userRoutes);
app.use("/api/memories", memoryRoutes);
app.use("/api/poems", poemRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/upload", fileRoutes);
app.use("/api/telltales", telltaleRoutes);
app.use("/api/blog/categories", categoryRoutes)
app.use("/api/blog", blogRoutes)
app.use("/api/blog/comments", commentRoutes)
app.use("/api/blog/replies", replyRoutes)

app.use((req, res, next) => {
  const error = new HttpError("Sayfa Bulunamadı...", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Bilinmeyen bir hata meydana geldi." });
});

mongoose
  .connect(
  `mongodb+srv://${DB.env.DB_USER}:${DB.env.DB_PASSWORD}@cluster0.gddkf.mongodb.net/${DB.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
