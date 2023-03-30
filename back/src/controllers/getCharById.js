const axios = require("axios");
const { URL_BASE, KEY } = process.env;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = axios.get(`${URL_BASE}/character/${id}?key=${KEY}`);
    const { name, species, image, gender } = response.data;
    res.status(200).json({ id, name, species, image, gender });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCharById,
};
// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "7fe437112629.ac565859637cc0900f47";

// const getCharById = (res, ID) => {
//   fetch(`${URL_BASE}/character/${ID}?key=${KEY}`)
//     .then((response) => response.json())
//     .then((data) => {
//       obj = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(obj));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(err.message);
//     });
// };
