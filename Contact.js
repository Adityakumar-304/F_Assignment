const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String
});

module.exports = mongoose.model("Contact", ContactSchema);
