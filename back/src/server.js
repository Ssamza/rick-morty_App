const { _getCharById_ } = require("./controllers/getCharById");
const { _getCharDetail_ } = require("./controllers/getCharDetail");
const http = require("http");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("onsearch")) {
      const id = url.split("/").at(-1);

      _getCharById_(res, id);
    }

    if (url.includes("detail")) {
      const id = url.split("/").at(-1);

      _getCharDetail_(res, id);
    }
  })
  .listen(PORT, "localhost");

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
