document.getElementById('search-btn').addEventListener('click', function() {
    const movieName = document.getElementById('movie-name').value;
    fetchMovies(movieName);
});

function fetchMovies(movieName) {
    const apiKey = 'b7cc5233';
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                document.getElementById('result').innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const resultSection = document.getElementById('result');
    resultSection.innerHTML = ''; // Correction ici

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title} poster">
        `;
        resultSection.appendChild(movieElement);
    });
}