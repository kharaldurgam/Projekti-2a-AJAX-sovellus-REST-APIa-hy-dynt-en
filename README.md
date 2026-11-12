# Projekti-2a-AJAX-sovellus-REST-APIa-hy-dynt-en
A simple webapp that fetch data from api and show on dashboard 


// Used Ai when something gone wrong here and learn new thing while 
            shedule.innerHTML = shows.slice(0, 100).map(show => {
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
