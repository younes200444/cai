document.querySelectorAll('.btn-ajouter-medicaments').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = '../src/liste_medicament.html';
    });
});