// JavaScript pour la page Doctor Listing

// Fonction pour ajouter ou retirer un docteur des favoris
document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll('.heart, .heart-outline');

    hearts.forEach(heart => {
        heart.addEventListener('click', function () {
            // Toggle between favorite (heart filled) and not favorite (heart outline)
            if (this.classList.contains('heart-outline')) {
                this.classList.remove('heart-outline');
                this.classList.add('heart');
                this.innerHTML = ❤️'; // Full heart
            } else {
                this.classList.remove('heart');
                this.classList.add('heart-outline');
                this.innerHTML = '♡'; // Empty heart
            }
        });
    });

    // Formulaire de recherche
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const doctorCards = document.querySelectorAll('.doctor-card');

        doctorCards.forEach(card => {
            const doctorName = card.querySelector('h2').textContent.toLowerCase();
            if (doctorName.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Prendre un rendez-vous (simulation)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert("Votre rendez-vous a été pris avec succès !");
        });
    });
});
