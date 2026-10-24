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

            if (hoursToday && hoursToday.open) {
                textHours = `Open: ${hoursToday.start} to ${hoursToday.end}`;
            }

            else {
                textHours = 'Today: CLOSED';
            }

            cards += `
        <article class="card">
            <h4>${place.name}</h4>
            <p><strong>Categories:</strong> ${place.categories.join(', ')}</p>
            <p>${place.description.en}</p>
            <p class="hours">${textHours}</p>
        </article>
        `;
        }
    }
}

document.getElementById('places-list').innerHTML = cards;