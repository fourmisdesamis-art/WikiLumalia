// ===============================
// WIKI LUMALIA
// main.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Animation d'apparition
    // ===============================

    document.body.classList.add("loaded");



    // ===============================
    // Barre de recherche
    // ===============================

    const searchInput = document.querySelector(".search-box input");

    const articleCards = document.querySelectorAll(".article-card");
    const categoryCards = document.querySelectorAll(".category-card");

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();

        articleCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        categoryCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });



    // ===============================
    // Échap = vider la recherche
    // ===============================

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            searchInput.value = "";

            searchInput.dispatchEvent(new Event("input"));

            searchInput.blur();

        }

    });



    // ===============================
    // Placeholder dynamique
    // ===============================

    const placeholders = [
        "Rechercher un article...",
        "Créer un pays...",
        "Créer une entreprise...",
        "Technologies...",
        "Les métiers...",
        "Le règlement..."
    ];

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= placeholders.length) {
            index = 0;
        }

        searchInput.placeholder = placeholders[index];

    }, 3500);

});
