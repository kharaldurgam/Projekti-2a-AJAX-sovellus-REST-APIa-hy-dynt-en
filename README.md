# Projekti 2a: AJAX-sovellus REST-rajapintaa hyödyntäen

Yksinkertainen verkkosovellus, joka hakee tietoja REST-rajapinnasta (REST API) ja esittää ne näkymässä.

## Projektin kuvaus

Tässä projektissa käytetään AJAX-tekniikkaa televisiosarjoja koskevien tietojen hakemiseen ulkoisesta rajapinnasta. Tiedot esitetään selkeässä näkymässä. Sovellus näyttää sarjojen nimet, julisteet, esityspäivät, kellonajat sekä tiedot esittävästä kanavasta tai suoratoistopalvelusta.

## Ominaisuudet

- Tietojen haku REST-rajapinnasta
- Tietojen esittäminen näkymässä (dashboard-tyylinen asettelu)
- Sarjojen julistekuvien näyttäminen
- Esityspäivien ja kellonaikojen näyttäminen
- Tiedot esittävästä kanavasta tai suoratoistopalvelusta
- Dynaamisen sisällön luominen sivulle JavaScriptin avulla

## Käytetyt teknologiat

- HTML
- CSS
- JavaScript
- REST API
- AJAX / fetch()

## Missä Ai:ta käytetään

Käytin tekoälyä JavaScript-koodin kirjoittamiseen, kun koodi ei toiminut. Pystyin selvittämään, mikä oli vialla, ja samalla oppimaan uusia asioita.
```javascript
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

## Käyttöohjeet

1. Avaa projekti selaimessa.
2. Varmista, että rajapinta (API) on käytettävissä ja tavoitettavissa. 3. Lataa sivu tietojen hakemiseksi ja näyttämiseksi.
4. Suorita sivu tarvittaessa paikallisen verkkopalvelimen, kuten Live Serverin, avulla.

## Huomioita

Tämä projekti syntyi samalla, kun opettelin työskentelemään rajapintojen (API) ja JavaScriptin parissa. Joitakin osia parannettiin tekoälytyökalujen avulla virheenkorjauksen ja uusien käsitteiden opettelun yhteydessä.
