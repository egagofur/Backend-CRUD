const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku");

const db = mongoose.connection;

db.on("eror", console.error.bind(console, "koneksi database gagal.."));
db.once("open", () => {
  console.log("koneksi database berhasil!");
});
