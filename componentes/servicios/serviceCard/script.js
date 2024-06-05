document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('card');
    
    card.addEventListener('click', function () {
        if (window.innerWidth < 980) {
            card.classList.toggle('expanded');
        }
    });
});