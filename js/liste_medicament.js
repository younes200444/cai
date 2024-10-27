// Functionality for the back button
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back(); // Return to the previous page
});
document.querySelectorAll('.medication-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/dt_medi.html';
    });
});