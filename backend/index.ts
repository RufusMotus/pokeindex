const express = require('express');
const app = express();
const port = 3000;
const pokemonList = [];
const pokeApiUrl = 'https://pokeapi.co/api/v2';

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/list', (req, res) => {
  res.send(JSON.stringify(pokemonList));
});

app.post('/api/pokemon', async (req, res) => {
  let pokemonRes;
  await fetch(`${pokeApiUrl}/pokemon/${req.body.query}`)
    .then((res) => res.json())
    .then((data) => {
      pokemonRes = data;
    })
    .catch((err) => {
      res.status(404).send(JSON.stringify({ error: 'Pokemon not found' }));
    });

  await fetch(`${pokemonRes.species.url}`)
    .then((res) => res.json())
    .then((data) => {
      res.send(JSON.stringify({ ...pokemonRes, speciesData: data }));
    })
    .catch((err) => {
      res.status(404).send(JSON.stringify({ error: 'Spieces not found' }));
    });
});

app.listen(port, () => {
  fetch(`${pokeApiUrl}/pokemon/?limit=-1`)
    .then((res) => res.json())
    .then((data) => data.results.forEach((pokemon) => pokemonList.push(pokemon.name)));
  console.log(`Backend listening on port ${port} with provided api key: ${process.env.BACKEND_API_KEY}`);
});
