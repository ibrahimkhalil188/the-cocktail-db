const cocktailData = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => displayCocktails(data.drinks[0]))
}

cocktailData()

const displayCocktails = cocktail => {
    console.log(cocktail)
    document.getElementById("body").style.backgroundImage = `url(${cocktail.strDrinkThumb})`

}