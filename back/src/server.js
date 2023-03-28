require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});

// require("dotenv").config();
// const { getCharById } = require("./controllers/getCharById");
// const { getCharDetail } = require("./controllers/getCharDetail");
// const http = require("http");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes("onsearch")) {
//       const id = url.split("/").at(-1);

//       getCharById(res, id);
//     }

//     if (url.includes("detail")) {
//       const id = url.split("/").at(-1);

//       getCharDetail(res, id);
//     }
//   })
//   .listen(PORT, "localhost");

// const data = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes("rickandmorty/character/")) {
//       const id = url.split("/").at(-1);
//       const character = data.find((char) => char.id == id);

//       if (character) {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "character not found" }));
//       }
//     }
//   })
//   .listen(3001, "localhost");
