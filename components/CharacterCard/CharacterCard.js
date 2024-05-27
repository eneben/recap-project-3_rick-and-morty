const main = document.querySelector('[data-js="main"]');

export function CharacterCard() {
  const newCard = document.createElement("ul");
  newCard.classList.add("card-container");
  newCard.innerHTML = `<li class="card">
  <div class="card__image-container">
    <img
      class="card__image"
      src="${XXXXXXXXXXXXXX}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${XXXXXXXXXXXXXX}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${XXXXXXXXXXXXXX}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${XXXXXXXXXXXXXX}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${XXXXXXXXXXXXXX}</dd>
    </dl>
  </div>
</li>`;
  main.append(newCard);
}

CharacterCard();
