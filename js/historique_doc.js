document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/historique_rendez-vous_docteur.html';
    });
});