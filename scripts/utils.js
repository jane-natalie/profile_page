const fetch = require('node-fetch');

async function fetchJoke() {
  const data = await fetch('https://api.chucknorris.io/jokes/random');
  const joke = await data.json();
  return joke.value;
}

module.exports = fetchJoke;
