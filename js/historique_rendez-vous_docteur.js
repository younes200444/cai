
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back(); 
});

document.getElementById('searchInput').addEventListener('keyup', function() {
    let searchQuery = this.value.toLowerCase();
    let appointmentCards = document.querySelectorAll('.appointment-card');
    appointmentCards.forEach(card => {
        let appointmentText = card.querySelector('h3').textContent.toLowerCase();
        if (appointmentText.includes(searchQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
