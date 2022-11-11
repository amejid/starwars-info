const contentEl = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  const movieId = sessionStorage.getItem('movieId');
  contentEl.innerHTML = '';
  fetch(movieId).then((res) => res.json()).then((data) => {
    const { characters } = data;

    characters.forEach((character) => {
      let charOutput = '';
      fetch(character).then((charRes) => charRes.json()).then((charData) => {
        charOutput = `
          <div>
          <p>Name: ${charData.name}</p>
<p>Height: ${charData.height} cm</p>
<p>Weight: ${charData.mass} kg</p>
<p>Birth Year: ${charData.birth_year}</p>
          </div>`;
        contentEl.insertAdjacentHTML('beforeend', charOutput);
      });
    });
    const output = `<p>${data.title} characters: </p>`;
    contentEl.insertAdjacentHTML('beforeend', output);
  });
});