const express = require("express");
const axios = require("axios");
const util = require("util");

const router = express.Router();

router.get("/movements/:piece/:position", async (req, res) => {
  const { piece, position } = req.params;

  console.log("piece", piece);
  console.log("position", position);

  let response = [];

  res.send(response);
});

module.exports = router;
