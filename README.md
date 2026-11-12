# Projekti-2a-AJAX-sovellus-REST-APIa-hy-dynt-en

A simple web application that fetches data from a REST API and displays it on a dashboard.

## Project description

This project uses AJAX to retrieve TV show information from an external API and present it in a clean dashboard. The app displays show names, posters, airing days, time slots, and network information.

## Features

- Fetch data from a REST API
- Display data in a dashboard layout
- Show poster images for each item
- Show airing days and time
- Display network or streaming channel information
- Use JavaScript to render dynamic content on the page

## Technologies used

- HTML
- CSS
- JavaScript
- REST API
- AJAX / fetch()

## Example code

This is an example of how the app renders the movie/show cards:

```javascript
schedule.innerHTML = shows.slice(0, 100).map(show => {
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
```

## How to run

1. Open the project in a browser.
2. Make sure the API is available and reachable.
3. Load the page to fetch and display the data.
4. If needed, run it with a local web server such as Live Server.

## Notes

This project was created while learning how to work with APIs and JavaScript. Some parts were improved with the help of AI tools when debugging and learning new concepts.
