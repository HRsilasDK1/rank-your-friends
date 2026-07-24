const button = document.getElementById("random-btn");
const categoryBox = document.getElementById("category-box");

let categories = [];

async function loadCategories() {
    try {
        const response = await fetch("categories.json");
        const data = await response.json();

        categories = data.categories;
    } catch (error) {
        categoryBox.textContent = "Kunne ikke indlæse categories.json";
        console.error(error);
    }
}

button.addEventListener("click", () => {
    if (categories.length === 0) return;

    const randomIndex = Math.floor(Math.random() * categories.length);
    console.log(`Random index: ${randomIndex}, Category: ${categories[randomIndex]}, Categories length: ${categories.length}`);
    categoryBox.textContent = categories[randomIndex];
});

loadCategories();