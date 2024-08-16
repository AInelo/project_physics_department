const express = require("express");
const path = require("path");
//const fileupload = require("express-fileupload");
// const browserSync = require("browser-sync")

let initial_path = path.join(__dirname, "src");

const app = express();

app.use(express.static(initial_path));
//app.use(fileupload());

app.get('/' )

const ipAdress = "192.168.1.106";
const port = 4001;
const Port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Le serveur tourne aussi sur: http://localhost:${port} `);

  // browserSync({
  //   proxy: `http://${ipAdress}:${Port}`,
  //   files: ["public/**/*"],
  //   port: Port + 1,
  //   open: false
  // });

})
