
document.querySelectorAll('.submit-btn').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/rendez-vous-date.html';
    });
});
document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/profile.html';
    });
});