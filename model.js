const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    judul: { type: String, required: true },
    peminjam: { type: String, required: true },
  },
  { collection: "koleksiBuku" }
);

module.exports = mongoose.model("BukuModel", BookSchema);
