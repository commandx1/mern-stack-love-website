const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./routes/user-router");
const memoryRoutes = require("./routes/memory-router");
const aboutRoutes = require("./routes/about-router");
const poemRoutes = require("./routes/poem-router");
const telltaleRoutes = require("./routes/telltale-router");
const HttpError = require("./models/http-error");
const fileRoutes = require("./routes/file-router");
const categoryRoutes = require("./routes/blog/category-router");
const blogRoutes = require("./routes/blog/blog-router");
const commentRoutes = require("./routes/blog/comment-router");
const replyRoutes = require("./routes/blog/reply-router");
const notificationRoutes = require("./routes/notification-router");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
let users = [];
let connections = [];

app.use(bodyParser.json());

// app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(express.static(path.join("public")));

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
app.use("/api/blog/categories", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/blog/comments", commentRoutes);
app.use("/api/blog/replies", replyRoutes);
app.use("/api/notifications", notificationRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});



io.sockets.on("connection", (socket) => {
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length);

  //Disconnect
  socket.on("disconnect", (data) => {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);
  });
  //send message
  socket.on("send message", (data) => {
    io.sockets.emit("new message", { msg: data, user: socket.username });
  });

  //new user
  socket.on("new user", (data) => {
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  const updateUsernames = () => {
    io.sockets.emit("get users", users);
  };
});

app.use((req, res, next) => {
  const error = new HttpError("Sayfa Bulunamadı...", 404);
  throw error;
});

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, (err) => {
//       console.log(err);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || "Bilinmeyen bir hata meydana geldi." });
// });

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gddkf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    server.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
