export function NavButton(text, newClass, onClick) {
  const button = document.createElement("button");
  button.classList.add("button", newClass);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}
