// https://api.chucknorris.io/jokes/random

import fetchJoke from './utils';

async function updateView(id) {
  const div = document.getElementById(id);
  const el = document.createElement('p');
  el.classList.add('joke');
  el.textContent = await fetchJoke();
  div.appendChild(el);
}

document.querySelector('#show-jokes').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('jokes');
});
