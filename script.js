// Exemple : Ajouter un effet de survol sur les liens des fonctionnalités
document.querySelectorAll('.feature-item a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#555';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '#333';
    });
});