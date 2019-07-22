require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

console.log(process.env.API_TOKEN);

const app = express();

app.use(morgan("dev"));

const validGenres = [
  "Animation",
  "Drama",
  "Romantic",
  "Comedy",
  "Spy",
  "Crime",
  "Thriller",
  "Adventure",
  "Documentary",
  "Horror",
  "Action",
  "Western",
  "History",
  "Biography",
  "Musical",
  "Fantasy",
  "War",
  "Grotesque"
];

function handleGetGenres(req, res) {
  res.json(validGenres);
}

app.get("/genres", handleGetGenres);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
