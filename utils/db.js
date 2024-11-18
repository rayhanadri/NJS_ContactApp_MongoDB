require('dotenv').config();

// Access the MongoDB URI from the environment variables
const mongodbUri = process.env.MONGODB_URI;

const mongoose = require("mongoose");

mongoose.connect(mongodbUri);

// const Contact = mongoose.model("Contact", {
//   nama: {
//     type: String,
//     required: true,
//   },
//   nohp: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//   },
// });

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Doddy Ferdiansyah",
//   nohp: "081188776655",
//   email: "doddy@gmail.com",
// });

// //Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
