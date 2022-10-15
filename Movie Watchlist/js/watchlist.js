// General Elements
const noMovieText = `
    <section id="defaultSect" class="container">
        <h4>Your watchlist is looking a little empty...</h4>
        <a href="index.html" class="addToWatchlist">
            <img src="images/add-icon.png" alt="Add Icon">
            
            <p>
                Let’s add some movies!
            </p>
        </a>
    </section>
`;
const watchlistMain = document.getElementById('watchlistMain');
const apiKey = 'db7f8141';
//Grabs the movieIDs array from localStorage
const movieIDs = JSON.parse(localStorage.getItem('movies')) || [];

//Function that displays the watchlist
const displayWatchlist = async () => {
    //Conditional for if movieIds array is empty or not
    if (movieIDs.length > 0) {
        watchlistMain.innerHTML = ''; // Deletes content in main

        // Maps through ids in the array
        for (id of movieIDs) {
            //fetches movie details for each of the ids
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
            );
            const data = await res.json();
            const { Title, imdbID, Genre, Plot, Poster, Runtime, imdbRating } =
                data; //Destructures the properties of the movie's data

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
                            <button id=${imdbID} class="removeBtn">
                                <img src="images/remove-icon.png" alt="Remove Icon" />
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
            watchlistMain.innerHTML += movieText;

            // //Grabs all the remove from watchlist buttons
            const removeBtn = document.querySelectorAll('.removeBtn');

            // Adds a click event to each remove from watchlist button
            removeBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    //assigns the button's id to a new variable
                    const imdbID = btn.id;

                    //finds the index of the imdbID in the movieIDs array and saves it in the index variable
                    let index = movieIDs.indexOf(imdbID);

                    //Deletes the imdbId from the array
                    movieIDs.splice(index, 1);

                    //adds the altered array to localStorage
                    localStorage.setItem('movies', JSON.stringify(movieIDs));

                    //displays the new watchlist
                    displayWatchlist();
                });
            });
        }
    } else {
        // fills the main section with the no data html
        watchlistMain.innerHTML = noMovieText;
    }
};

displayWatchlist();

//STRETCH GOALS
//Possibly add a loading spinner
//Add pagination
