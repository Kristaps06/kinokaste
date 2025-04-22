const movieList = document.getElementById('movieList');
const movieInput = document.getElementById('movieInput');
const addButton = document.getElementById('addButton');
const movies = ['Inception', 'The Matrix'];

function renderMovies() {
  movieList.innerHTML = '';
  movies.forEach(title => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.textContent = title;
    movieList.appendChild(div);
  });
}

function addMovie() {
  const title = movieInput.value.trim();
  if (title !== '') {
    movies.push(title);
    movieInput.value = '';
    renderMovies();
  }
}

addButton.addEventListener('click', addMovie);

// Initialize with default movies
renderMovies();