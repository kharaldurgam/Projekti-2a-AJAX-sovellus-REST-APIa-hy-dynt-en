async function getMovies() {
    try {
        const response = await fetch("https://api.tvmaze.com/shows");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const shows = await response.json();

        const targetElement = document.getElementById("indexhtmlfile");
            // Displaying the first 100 shows from the array
            targetElement.innerHTML = shows.slice(0, 100).map(show => `
                <div class="movie-card">
                    <img class="poster" src="${show.image ? show.image.medium : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${show.name}">
                    <h2>${show.name}</h2>
                    <p>Genres: ${show.genres}</p>
                    <p>Premiered: ${show.premiered}</p>
                    <p>Rating: ${show.rating && show.rating.average ? show.rating.average : "N/A"}</p>
                </div>
            `).join("");
        

    } catch (error) {
        console.error("Error fetching shows:", error);
    }
}

getMovies();

  async function ghibliart() {
    try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const movies = await response.json();

        const container = document.getElementById("container");
       
            container.innerHTML = movies.map(movie => `
                <div class="movie-card">
                    <img class="poster" src="${movie.image}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <p>Director: ${movie.director}</p>
                    <p>Release Date: ${movie.release_date}</p>
                </div>
            `).join("");
        

    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Call the function to load the movies
ghibliart();

/*async function ghibliart() {
    try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const movies = await response.json();

        const container = document.getElementById("container");
       
            container.innerHTML = movies.slice(0, 100).map(movie => `
                <div class="movie-card">
                    <img class="poster" src="${movie.image}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <p>Director: ${movie.director}</p>
                    <p>Release Date: ${movie.release_date}</p>
                </div>
            `).join("");
        

    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Call the function to load the movies
ghibliart();*/









/*
// Defines an asynchronous function named getPlanets to handle fetching and displaying planet data
async function getPlanets() {
    // Starts a try block to safely catch any network or server errors
    try {
        // Sends a network request to SWAPI.tech's planets endpoint and waits for the response
        const response = await fetch(
            "https://swapi.tech/api/planets"
        );

        // Checks if the HTTP response from the server failed (e.g., status 404 or 500)
        if (!response.ok) {
            throw new Error(response.status);
        }

        // Waits for the data to download and converts it into a JavaScript object
        const data = await response.json();

        // SWAPI.tech stores the array of planets inside 'data.results'
        const planets = data.results;

        // Finds the HTML element with id="homepage" and updates its innerHTML with generated planet cards
        document.getElementById("hompage").innerHTML =
            // Loops through each planet object in the array and turns it into an HTML template string card
            planets.map(planet => `
                <div class="movie-card">
                    <h2>${planet.name}</h2>
                    <p>Planet ID: ${planet.uid}</p>
                    <a href="${planet.url}" target="_blank">View Details JSON</a>
                </div>
            // Joins all individual HTML strings together into one big continuous text string, removing commas
            `).join("");

    // Catches any errors that happened inside the try block (like network failure)
    } catch (error) {
        // Prints the error message to the browser console for debugging
        console.error("Error:", error);
    }
}

// Immediately calls and runs the getPlanets function when the script file loads
getPlanets();

// Fetch latest Nepali news in browser or Node.js
async function getLatestNepaliNews() {
    const url = 'https://huggingface.co/datasets/thegauravgiri/nepali-news-dataset/raw/main/data/today.json';
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(`Loaded ${data.total_articles} articles from ${data.sources.join(', ')}`);
    
    data.articles.forEach(article => {
      console.log(`[${article.source}] ${article.title}`);
    });
  }
  
  getLatestNepaliNews();*/

  async function getSchedules() {
    try {
        const response = await fetch("https://api.tvmaze.com/shows");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const shows = await response.json();

        const shedule = document.getElementById("shedule");
            // Displaying the first 20 shows with their broadcast schedules
            shedule.innerHTML = shows.slice(0, 100).map(show => {
                 //Extract schedule details (e.g., At 21:00 on Mondays)
                const time = show.schedule && show.schedule.time ? show.schedule.time : "N/A";
                const days = show.schedule && show.schedule.days && show.schedule.days.length > 0 
                    ? show.schedule.days.join(", ") 
                    : "Various / Daily";

                return `
                    <div class="movie-card">
                        <img class="poster" src="${show.image ? show.image.medium : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${show.name}">
                        <h2>${show.name}</h2>
                        <p><strong>Airs:</strong> ${days} at ${time}</p>
                        <p><strong>Network:</strong> ${show.network ? show.network.name : (show.webChannel ? show.webChannel.name : "Online")}</p>
                    </div>
                `;
            }).join("");
        

    } catch (error) {
        console.error("Error fetching schedules:", error);
    }
}

getSchedules();
  /*async function getSchedules() {
    try {
        const response = await fetch("https://api.tvmaze.com/shows");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const shows = await response.json();

        const targetElement = document.getElementById("shedule");
            // Displaying the first 20 shows with their broadcast schedules
            targetElement.innerHTML = shows.slice(0, 100).map(show => {
                /* Extract schedule details (e.g., At 21:00 on Mondays)
                const time = show.schedule && show.schedule.time ? show.schedule.time : "N/A";
                const days = show.schedule && show.schedule.days && show.schedule.days.length > 0 
                    ? show.schedule.days.join(", ") 
                    : "Various / Daily";*//*

                return `
                    <div class="movie-card">
                        <img class="poster" src="${show.image ? show.image.medium : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${show.name}">
                        <h2>${show.name}</h2>
                        <p><strong>Airs:</strong> ${show.schedule && show.schedule.days && show.schedule.days.length } at ${show.schedule && show.schedule.time ? show.schedule.time : "N/A"}</p>
                        <p><strong>Network:</strong> ${show.network ? show.network.name : (show.webChannel ? show.webChannel.name : "Online")}</p>
                    </div>
                `;
            }).join("");
        

    } catch (error) {
        console.error("Error fetching schedules:", error);
    }
}

getSchedules();
*/

async function getNews() {
    try {
        // Fetching up to 10 articles
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const articles = data.results; // Spaceflight API puts items in a "results" array

        // Change "indexhtmlfile" to match the ID of the container element in your news.html file
        const targetElement = document.getElementById("news");
        
        if (targetElement) {
            targetElement.innerHTML = articles.map(article => `
                <div class="movie-card">
                    <img class="poster" src="${article.image_url}" alt="${article.title}">
                    <h2>${article.title}</h2>
                    <p>${article.summary ? article.summary.slice(0, 100) + '...' : 'No summary available.'}</p>
                    <p><a href="${article.url}" target="_blank" style="color: #f5c518; text-decoration: none;">Read Full Article →</a></p>
                </div>
            `).join("");
        } else {
            console.error("Target container element not found in HTML!");
        }

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Call the function to load the news
getNews();