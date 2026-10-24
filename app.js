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


const today = new Date().getDay();

let cards = '';

for (const place of places) {
    const hoursToday = place.hours[today];
    let textHours = ''

    if (hoursToday && hoursToday.open) {
        textHours = `Open today: ${hoursToday.start} to ${hoursToday.end}`
    }
    else {
        textHours = 'Today: CLOSED';
    }

    cards += `
    <article class="card">
        <h3>${place.name}</h3>
        <p><strong>Categories:</strong> ${place.category.join(', ')}</p>
        <p>${place.description.en}</p>
        <p class="hours">${textHours}</p>
    </article>
    `;
}

document.getElementById('places-list').innerHTML = cards;