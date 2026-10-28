const buttons = document.querySelectorAll('.btn')

const now = new Date();
const today = new Date().getDay();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const nowMinutes = currentHour * 60 + currentMinute


function toMinutes(text) {
    text = text.split(":");
    const hour = Number(text[0]);
    const minute = Number(text[1]);
    const currentTime = hour * 60 + minute;
    return currentTime;
}

function getStatus(place) {
    const day = place.hours[today];
    if (day && day.open === true) {

        const openMinutes = toMinutes(day.start);
        const closeMinutes = toMinutes(day.end);

        if (closeMinutes > openMinutes) {
            if (nowMinutes >= openMinutes && nowMinutes < closeMinutes) {
                const minutesLeft = closeMinutes - nowMinutes;
                if (minutesLeft <= 60) {
                    return "closing";
                }
                return "open";
            }
        }
        else if (nowMinutes >= openMinutes) {
            const minutesLeft = closeMinutes + 1440 - nowMinutes;
            if (minutesLeft <= 60) {
                return "closing";
            }
            return "open";
        }
    }

    const yesterdayIndex = (today + 6) % 7;
    const yesterday = place.hours[yesterdayIndex];

    if (yesterday && yesterday.open === true) {
        const yOpen = toMinutes(yesterday.start);
        const yClose = toMinutes(yesterday.end);

        if (yClose < yOpen && nowMinutes < yClose) {
            const minutesLeft = yClose - nowMinutes;
            if (minutesLeft <= 60) {
                return "closing";
            }
            return "open";
        }
    }

    return "closed"; 
};


for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const active = document.querySelector('.btn.active')
        if (active) {
            active.classList.remove('active');
        }
        button.classList.add("active");

        const target = button.dataset.tab;

        const page = document.querySelector('.content.active');
        if (page) page.classList.remove('active');

        const targetPage = document.getElementById(target);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    });
}

let cards = '';

for (const categoryTarget of myCategories) {

    let titleAdded = false;

    for (const place of places) {
        if (place.categories.includes(categoryTarget)) {

            if (titleAdded === false) {
                cards += `<h3 class="category-title">${categoryTarget}s</h3>`;
                titleAdded = true;
            }

            const hoursToday = place.hours[today];
            let textHours = '';
            let statusText = '';

            if (hoursToday && hoursToday.open) {
                textHours = `${hoursToday.start} - ${hoursToday.end}`;
            }

            else {
                textHours = 'Closed today';
            }

            const status = getStatus(place)

            if (status === "open") {
                statusText = 'Open';
            }
            else if (status === "closing") {
                statusText = 'Closing soon';
            }
            else {
                statusText = "Closed";
            }

            let labels = "";
            place.categories.forEach(category => {
                labels += `<span class="tag">${category}</span>`;
            });

            let map = "";
            if (place.mapsURL !== "") {
                map = `<a target="_blank" class="maps" href="${place.mapsURL}" rel="noopener">Get directions</a>`;
            }

            cards += `
        <article class="card ${status}">
            <div class="card-photo">
                <span class="card-hours">${textHours}</span>
                <img src="${place.image}" alt="${place.name}" loading="lazy">
            </div>
            <div class="card-header">
                <h4>${place.name}</h4>
                <span class="status ${status}" >${statusText}</span>
            </div>
            <p class="card-desc">${place.description.en}</p>
            <div class="card-tags">${labels}</div>
            <button class="more-btn">More Info</button>
            <div class="card-details">
                <div class="card-actions">
                    ${map}
                    <a href="https://wa.me/${place.whatsapp}" target="_blank" rel="noopener">Whatsapp</a>
                </div>
            </div>
        </article>
        `;

        }
    }
}

document.getElementById('places-list').innerHTML = cards;

const more = document.querySelectorAll('.more-btn');
more.forEach((more, index) => {
    more.addEventListener('click', () => {
        const info = more.closest('.card');
        info.classList.toggle('expanded');

        if (info.classList.contains('expanded')) {
            more.textContent = 'Less info';
        } else {
            more.textContent = 'More info';
        }

    });
});







