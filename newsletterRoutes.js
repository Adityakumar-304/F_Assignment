const express = require("express");
const router = express.Router();
const Newsletter = require("../models/Newsletter");

router.get("/", async (req, res) => {
  const subs = await Newsletter.find();
  res.json(subs);
});

router.post("/", async (req, res) => {
  const newSub = new Newsletter(req.body);
  await newSub.save();
  res.status(201).json({ message: "Subscribed!" });
});

module.exports = router;
