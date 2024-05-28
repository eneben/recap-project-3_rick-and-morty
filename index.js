import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { PageNumbers } from "./components/NavPagination/NavPagination.js";
import { NavButton } from "./components/NavButton/NavButton.js";

console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const minPage = 1;
let maxPage = 42;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  maxPage = data.info.pages;
  PageNumbers(pagination, page, maxPage);
  const characters = data.results;
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

const prevButton = NavButton("previous", "button--prev", () => {
  if (page === minPage) {
    alert("You are already on page 1!");
  } else {
    page--;
    fetchCharacters();
    PageNumbers(pagination, page, maxPage);
  }
});

const nextButton = NavButton("next", "button--next", () => {
  if (page === maxPage) {
    alert("You are already on the last page!");
  } else {
    page++;
    fetchCharacters();
    PageNumbers(pagination, page, maxPage);
  }
});

navigation.append(prevButton, nextButton);

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  page = 1;
  fetchCharacters();
  PageNumbers(pagination, page, maxPage);
  event.target.reset();
});
