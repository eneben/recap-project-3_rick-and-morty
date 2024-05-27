const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

prevButton.addEventListener("click", (event) => {
  console.log("event: ", event);
  page--;
});

export { prevButton };
