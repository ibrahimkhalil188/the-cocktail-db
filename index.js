const cocktailData = () => {
    const inputField = document.getElementById("input-field").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputField}`)
        .then(res => res.json())
        .then(data => showCocktailData(data.drinks))
}
//margarita
//strTags
const showCocktailData = cocktails => {
    const displayCocktail = document.getElementById("displayCocktail")
    displayCocktail.textContent = ""
    cocktails.forEach(cocktail => {
        console.log(cocktail)
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cocktail.strDrink}</h5>
                        <p class="card-text">${cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
        `
        displayCocktail.appendChild(div)
    });
}