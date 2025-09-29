function makeFriendsList(friends) {
  // ваш код...
  let result = '';
  let ul = document.createElement('ul');
  for (let item of friends) {
    result += `<li>${item.firstName} ${item.lastName}</li>`;
  }
  ul.innerHTML = result;
  return ul;
}
