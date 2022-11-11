const contentEl = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  const actorId = sessionStorage.getItem('actorId');
  contentEl.innerHTML = '';
  fetch(actorId).then((res) => res.json()).then((data) => {
    const movies = data.films;

    movies.forEach((mov) => {
      let movOutput = '';
      fetch(mov).then((movRes) => movRes.json()).then((movData) => {
        movOutput = `
          <div>
          <p>Title: ${movData.title}</p>
          <p>Episode: ${movData.episode_id}</p>
          <p>Story: ${movData.opening_crawl}</p>
          </div>`;
        contentEl.insertAdjacentHTML('beforeend', movOutput);
      }).catch(e => {
        contentEl.insertAdjacentHTML('beforeend', '<h2>An error occurred</h2>');
      });

    });
    const output = `<p>${data.name} appeared in movies: </p>`;
    contentEl.insertAdjacentHTML('beforeend', output);
  }).catch(e => {
    contentEl.innerHTML = '<p>Please try again later</p>'
  });
});