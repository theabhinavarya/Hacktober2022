// General Elements
let searchText;
const noMovieText = `
    <section id="noDataSect" class="container">
        <h4 id="noDataText">
            Unable to find what you’re looking for.<br />Please try
            another search.
        </h4>
    </section>
`;
const apiKey = 'db7f8141';
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const main = document.getElementById('main');

// Function that carries out the add to watchlist functionality
const addMovieToWatchlist = () => {
    //Grabs all the add to watchlist buttons
    const addBtn = document.querySelectorAll('.addBtn');

    //Empty array that's going to save all the movies' imdbIDs
    let movieIDs = [];

    // Adds a click event to each add to watchlist button
    addBtn.forEach((e) => {
        e.addEventListener('click', () => {
            //Adds each of the ids to the movieIDs array
            movieIDs.push(e.id);

            //Removes duplicate ids from array
            movieIDs = movieIDs.filter((id, index) => {
                return movieIDs.indexOf(id) === index;
            });

            //adds the movieIDs array to localstorage
            localStorage.setItem('movies', JSON.stringify(movieIDs));
        });
    });
};

// Search Functionality
searchBtn.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevents reloading of form

    searchText = searchInput.value; // Saves input value

    // Fetches data from OMDB API using search query
    const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}&type=movie`
    );
    const data = await res.json();

    //Conditional for if the movie data is received or not
    if (data.Response !== 'False') {
        main.innerHTML = ''; // Deletes content in main

        // Maps through data received
        data.Search.map((movie) => {
            //Fetches for additional data for each movie using their imdbID
            fetch(
                `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&type=movie`
            )
                .then((res) => res.json())
                .then((data) => {
                    const {
                        Title,
                        imdbID, // used each movie's imdbIDs as the id of their addBtn
                        Genre,
                        Plot,
                        Poster,
                        Runtime,
                        imdbRating,
                    } = data; //Destructures the properties of the movie's data

                    const movieText = `
                        <div class="movieData container">
                            <img
                                src=${Poster}
                                class="moviePoster"
                                alt=""
                            />

                            <div class="movieDetails">
                                <div class="movieHeading">
                                    <h3 class="movieTitle">${Title}</h3>
                                    <p class="movieRate">
                                        <img
                                            src="images/rate-icon.png"
                                            alt="Rate Icon"
                                        />
                                        ${imdbRating}
                                    </p>
                                </div>

                                <div class="movieInfo">
                                    <p class="movieRuntime">${Runtime}</p>
                                    <p class="movieGenre">${Genre}</p>
                                    <button id=${imdbID} class="addBtn">
                                        <img src="images/add-icon.png" alt="Add Icon" />
                                        <span>Watchlist</span>
                                    </button>
                                </div>

                                <p class="movieSub">
                                ${Plot}
                                </p>
                            </div>
                        </div>
                    `; //Contains the html we want displayed

                    // Fills the main with the movie content
                    main.innerHTML += movieText;

                    addMovieToWatchlist();
                });
        });
    } else {
        // fills the main section with the no data html
        main.innerHTML = noMovieText;
    }
});
