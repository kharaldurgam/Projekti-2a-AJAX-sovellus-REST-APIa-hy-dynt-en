//////////////////////////////////////////////////////
//1. movies api
//////////////////////////////////////////////////////
async function getMovies() {
    try {
        //fetching data
        const response = await fetch("https://api.tvmaze.com/shows");
        //error handling
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const shows = await response.json();
        const targetElement = document.getElementById("indexhtmlfile");
                  ////////////////////////////////////////////
                  ////HTML-rakenteen luominen
                  ////////////////////////////////////////////
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
//////////////////////////////
//function calling
//////////////////////////////
getMovies();

//////////////////////////////////////////////////////
//2.ghibliart
//////////////////////////////////////////////////////
  async function ghibliart() {
    try {
        //fetching data 
        const response = await fetch("https://ghibliapi.vercel.app/films");
        //error handling 
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const movies = await response.json();
        const container = document.getElementById("container");
        ////////////////////////////////////////////
        ////HTML-rakenteen luominen
        ////////////////////////////////////////////
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
ghibliart();
//////////////////////////////////////////////////////
//3.shedule api 
//////////////////////////////////////////////////////
  async function getSchedules() {
    try {
        //fetching data
        const response = await fetch("https://api.tvmaze.com/shows");
        //error handling
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const shows = await response.json();
        const shedule = document.getElementById("shedule");
            // Displaying the first 20 shows with their broadcast schedules
            // Used Ai when something gone wrong here 
            shedule.innerHTML = shows.slice(0, 100).map(show => {
                const time = show.schedule && show.schedule.time ? show.schedule.time : "N/A";
                const days = show.schedule && show.schedule.days && show.schedule.days.length > 0 
                    ? show.schedule.days.join(", ") 
                    : "Various / Daily";
                ////////////////////////////////////////////
                ////HTML-rakenteen luominen
                ////////////////////////////////////////////
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
