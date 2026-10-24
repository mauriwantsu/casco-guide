const buttons = document.querySelectorAll('.btn')
const sections = document.querySelectorAll('.content')

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