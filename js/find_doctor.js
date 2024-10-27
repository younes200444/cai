
document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/profile.html';
    });
});

document.querySelectorAll('.reserve-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        window.location.href = '../src/reserve.html';
    });
});
