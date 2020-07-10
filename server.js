const express = require("express");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");
const morgan = require("morgan");

const server = express();

server.use(express.json()); // Built in middleware, no need to npm install it
server.use("/api/posts", postRouter);
server.use("/api/users", morgan("dev"), userRouter);
server.use(morgan("dev"));
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<p>API is up</p>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `${req.method} Request to ${req.url} at ${new Date().toISOString()}`
  );
  next();
}

module.exports = server;
