const movieList = document.getElementById('movieList');
const movieInput = document.getElementById('movieInput');
const genreSelect = document.getElementById('genreSelect');
const addButton = document.getElementById('addButton');

const movies = [
  { title: 'Inception', genre: 'Darbība' },
  { title: 'The Matrix', genre: 'Darbība' },
  { title: 'The Notebook', genre: 'Romantika' },
  { title: 'Titanic', genre: 'Romantika' },
  { title: 'Get Out', genre: 'Šausmu filma' },
  { title: 'The Conjuring', genre: 'Šausmu filma' },
  { title: 'Superbad', genre: 'Komēdija' },
  { title: 'Step Brothers', genre: 'Komēdija' },
  { title: 'The Godfather', genre: 'Drāma' },
  { title: 'Forrest Gump', genre: 'Drāma' },
  { title: 'Avengers: Endgame', genre: 'Darbība' },
  { title: 'A Quiet Place', genre: 'Šausmu filma' },
  { title: 'Mean Girls', genre: 'Komēdija' },
  { title: 'P.S. I Love You', genre: 'Romantika' },
  { title: 'Joker', genre: 'Drāma' },
  { title: 'The Hangover', genre: 'Komēdija' },
  { title: 'Annabelle', genre: 'Šausmu filma' },
  { title: 'Deadpool', genre: 'Darbība' },
  { title: 'La La Land', genre: 'Romantika' },
  { title: 'It', genre: 'Šausmu filma' },
  { title: 'Fight Club', genre: 'Drāma' },
  { title: 'The Proposal', genre: 'Romantika' }
];

function renderMovies() {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = `<strong>${movie.title}</strong><div class="movie-genre">Žanrs: ${movie.genre}</div>`;
    movieList.appendChild(div);
  });
}

function addMovie() {
  const title = movieInput.value.trim();
  const genre = genreSelect.value;
  if (title !== '' && genre !== '') {
    movies.push({ title, genre });
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

addButton.addEventListener('click', addMovie);

renderMovies();
