import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

const minPage = 1;
let maxPage = 42;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  maxPage = data.info.pages;
  const characters = data.results;
  pagination.textContent = `${page} / ${maxPage}`;
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
  }
});

const nextButton = NavButton("next", "button--next", () => {
  if (page === maxPage) {
    alert("You are already on the last page!");
  } else {
    page++;
    fetchCharacters();
  }
});

const pagination = NavPagination();

navigation.append(prevButton, pagination, nextButton);

const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  page = 1;
  fetchCharacters();
  event.target.reset();
});

searchBarContainer.append(searchBar);
