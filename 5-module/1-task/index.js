function hideSelf() {
  // ваш код...
  let buttonHideSelf = document.querySelector('.hide-self-button');

  buttonHideSelf.addEventListener('click', (event) => {
    event.target.hidden = true;
  })
}
