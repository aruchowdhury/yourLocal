"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { addUser } = require("./routes/connect");

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // endpoints:
  .post("/hfxShare/users", addUser)

  // handle 404s
  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
