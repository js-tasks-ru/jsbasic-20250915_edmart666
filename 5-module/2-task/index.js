function toggleText() {
  // ваш код...
  let button = document.body.querySelector('.toggle-text-button');

  button.addEventListener('click', () => {
    text.hidden = !text.hidden;
  });
}
