import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
// import {  } from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const minPage = 1;
const maxPage = 42;
let page = 1;
const searchQuery = "";

const url = `https://rickandmortyapi.com/api/character?page=${page}`;

async function fetchCharacters() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const characters = data.results;
  console.log("Data results: ", data.results);
  renderCharacters(characters);
}
fetchCharacters();

function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    CharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.episode
    );
  });
}

prevButton.addEventListener("click", (event) => {
  console.log("event: ", event);
  if (page === minPage) {
    alert("You are already on page 1!");
  } else {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", (event) => {
  console.log("event: ", event);
  if (page === maxPage) {
    alert("You are already on the last page!");
  } else {
    page++;
    fetchCharacters();
  }
});
