// https://api.chucknorris.io/jokes/random

async function fetchJoke() {
  const data = await fetch('https://api.chucknorris.io/jokes/random');
  const joke = await data.json();
  return joke.value;
}

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
