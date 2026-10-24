const buttons = document.querySelectorAll('.btn')

for (const button of buttons) {
    button.addEventListener('click', function(event) {
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

 const count = places.length;
    console.log(`First place: ${places[0].name}`);
    console.log(`Places: ${count}`);
    
    const today = new Date().getDay();

    const hoursToday = places[0].hours[today];

    if (hoursToday.open) {
        console.log(`Today (${hoursToday.day}) ${places[0].name} opens from: ${hoursToday.start} to ${hoursToday.end}`)
    }
    else {
        console.log(`${places[0].name} is closed today`)
    }

for (const place of places) {

    const days = place.hours;

    for (const day of days) {
        if (!day.open) {
            console.log(`${place.name} is closed on ${day.day}`)
        }
        else if (day.end < day.start) {
            console.log(` Note: ${place.name} closes ${day.end} on ${day.day}`)
        }
        else {
            console.log(`${place.name} normal hours: ${day.start} to ${day.end}`)
        }
    }
}