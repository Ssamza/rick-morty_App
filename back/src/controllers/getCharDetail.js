const _getCharDetail_ = (res, ID) => {
  fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => response.json())
    .then((data) => {
      obj = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(obj));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end(err.message);
    });
};

module.exports = {
  _getCharDetail_,
};
