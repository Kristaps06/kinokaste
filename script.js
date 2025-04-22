const movieList = document.getElementById('movieList');
const movieInput = document.getElementById('movieInput');
const genreSelect = document.getElementById('genreSelect');
const addButton = document.getElementById('addButton');
const searchInput = document.getElementById('searchInput');

let movies = [
  { title: 'Inception', genre: 'Darbība', watched: false },
  { title: 'The Matrix', genre: 'Darbība', watched: false },
  { title: 'The Notebook', genre: 'Romantika', watched: false },
  { title: 'Titanic', genre: 'Romantika', watched: false },
  { title: 'Get Out', genre: 'Šausmu filma', watched: false },
  { title: 'The Conjuring', genre: 'Šausmu filma', watched: false },
  { title: 'Superbad', genre: 'Komēdija', watched: false },
  { title: 'Step Brothers', genre: 'Komēdija', watched: false },
  { title: 'The Godfather', genre: 'Drāma', watched: false },
  { title: 'Forrest Gump', genre: 'Drāma', watched: false }
];

function renderMovies(filteredMovies = movies) {
  movieList.innerHTML = '';
  filteredMovies.forEach((movie, index) => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = `
      <strong>${movie.title}</strong>
      <div class="movie-genre">Žanrs: ${movie.genre}</div>
      <label>
        <input type="checkbox" onchange="toggleWatched(${index})" ${movie.watched ? 'checked' : ''} /> Skatīts
      </label>
      ${movie.watched ? '<span class="watched-label">✔ Skatīts</span>' : ''}
    `;
    movieList.appendChild(div);
  });
}

function addMovie() {
  const title = movieInput.value.trim();
  const genre = genreSelect.value;
  if (title !== '' && genre !== '') {
    movies.push({ title, genre, watched: false });
    movieInput.value = '';
    genreSelect.value = '';
    renderMovies();
  }
}

function toggleForm(type) {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  if (type === 'login') {
    document.getElementById('loginForm').style.display = 'block';
  } else {
    document.getElementById('signupForm').style.display = 'block';
  }
}

function toggleWatched(index) {
  movies[index].watched = !movies[index].watched;
  renderMovies();
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(query) ||
    m.genre.toLowerCase().includes(query)
  );
  renderMovies(filtered);
});

addButton.addEventListener('click', addMovie);
renderMovies();
// hhh#