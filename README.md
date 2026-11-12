# Projekti 2a: AJAX-sovellus REST-rajapintaa hyödyntäen

Yksinkertainen verkkosovellus, joka hakee tietoja REST-rajapinnasta (REST API) ja esittää ne näkymässä.

## Projektin kuvaus

Tässä projektissa käytetään AJAX-tekniikkaa televisiosarjoja koskevien tietojen hakemiseen ulkoisesta rajapinnasta. Tiedot esitetään selkeässä näkymässä. Sovellus näyttää sarjojen nimet, julisteet, esityspäivät, kellonajat sekä tiedot esittävästä kanavasta tai suoratoistopalvelusta.

## Ominaisuudet

- Tietojen haku REST-rajapinnasta
- Tietojen esittäminen näkymässä (dashboard-tyylinen asettelu)
- Sarjojen julistekuvien näyttäminen
- Esityspäivien ja kellonaikojen näyttäminen
- Dynaamisen sisällön luominen sivulle JavaScriptin avulla

## Käytetyt teknologiat

- HTML
- CSS
- JavaScript
- REST API
- AJAX / fetch()

## Missä käytin tekoälyän

Käytin tekoälyä JavaScript-koodin kirjoittamiseen, kun koodi ei toiminut. Pystyin selvittämään, mikä oli vialla, ja samalla oppimaan uusia asioita.
```javascript
//this is where I used AI
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
```

## Linkki
- Github - https://github.com/kharaldurgam/Projekti-2a-AJAX-sovellus-REST-APIa-hy-dynt-en

- Publiced page on internet - https://project2durgam.netlify.app/
