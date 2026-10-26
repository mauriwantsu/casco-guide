const buttons = document.querySelectorAll('.btn')

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
const today = new Date().getDay();

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
                statusText = `Open`;
                textHours = `${hoursToday.start} - ${hoursToday.end}`;
            }

            else {
                statusText = `Closed`
                textHours = 'Closed today';
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
        <article class="card">
            <div class="card-photo">
                <span class="card-hours">${textHours}</span>
                <img src="${place.image}" alt="${place.name}" loading="lazy">
            </div>
            <div class="card-header">
                <h4>${place.name}</h4>
                <span class="status">${statusText}</span>
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
