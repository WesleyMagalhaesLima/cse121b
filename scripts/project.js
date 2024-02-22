// Get references to the form, input field, and recipe list elements
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const recipeList = document.getElementById('recipe-list');

// Event listener for form submission
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    const searchTerm = input.value.trim(); // Get the search term entered by the user
    if (searchTerm === '') { // Validate if the search term is empty
        alert('Please enter an ingredient or cuisine to search.');
        return;
    }

    // Construct the API URL using the search term and API credentials
    const appId = '7a3c1295';
    const appKey = '79958a478e63d9d3842c0462b763b527';
    const apiUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

    try {
        // Fetch recipe data from the Edamam API
        const response = await fetch(apiUrl);
        const data = await response.json(); // Convert response to JSON format
        displayRecipes(data.hits); // Display fetched recipes
    } catch (error) {
        console.error('Error fetching recipes:', error);
        alert('An error occurred while fetching recipes. Please try again later.');
    }
});

// Function to display recipes on the webpage
function displayRecipes(recipes) {
    recipeList.innerHTML = ''; // Clear the recipe list

    if (recipes.length === 0) { // Handle case where no recipes are found
        recipeList.innerHTML = '<li>No recipes found. Please try a different search term.</li>';
        return;
    }

    recipes.forEach(recipe => {
        // Create HTML for each recipe item
        const recipeItem = `
            <li class="recipe-item">
                <h2>${recipe.recipe.label}</h2>
                <p>Calories: ${Math.round(recipe.recipe.calories)}  --> 
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
                </p>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            </li>
        `;
        recipeList.innerHTML += recipeItem; // Append recipe item to the recipe list
    });
}