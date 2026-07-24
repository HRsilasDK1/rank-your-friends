const button = document.getElementById("random-btn");
const categoryBox = document.getElementById("category-box");

let categories = [];
let availableCategories = [];

async function loadCategories() {
    try {
        const response = await fetch("categories.json");
        const data = await response.json();

        categories = data.categories;

        // Opret første blandede liste
        reshuffleCategories();

    } catch (error) {
        categoryBox.textContent = "Kunne ikke indlæse categories.json";
        console.error(error);
    }
}

function reshuffleCategories() {
    availableCategories = [...categories];

    // Fisher-Yates shuffle
    for (let i = availableCategories.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableCategories[i], availableCategories[j]] = [
            availableCategories[j],
            availableCategories[i]
        ];
    }
}

button.addEventListener("click", () => {
    if (availableCategories.length === 0) {
        reshuffleCategories();
    }

    const category = availableCategories.pop();

    categoryBox.textContent = category;
});

loadCategories();