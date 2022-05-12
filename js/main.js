


for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
 
    



 // Elementlarni tanlab kelish
    const pokemonList = document.querySelector(".pokemon-list")

    const pokemonItem = createElement("li", "col-4 list-group-item pokemon-item");
    const pokemonCard = createElement("div", "card border border-info");
    const pokemonImg = createElement("img", "card-img-top bg-info");
    pokemonImg.src = pokemon.img;
    const cardBody = createElement("div", "card-body");
    const pokemonName = createElement("h2", "card-title text-primary fs-1", pokemon.name);
    const pokemonWeakness = createElement("h3", "type-title text-danger fs-5", "Weaknesses");
    const weaknessesList = createElement("ul", "type-list");
    
    const pokemonHeight = createElement("p", "text-success fs-5",);
    pokemonHeight.textContent = "Height: " + pokemon.height;
    const pokemonWeight = createElement("p", "text-success fs-5",);
    pokemonWeight.textContent = "Weight: " + pokemon.weight;


    for (let j = 0; j < pokemon.weaknesses.length; j++) {
        const weaknessItem = pokemon.weaknesses[j];

        const weaknessesItem = createElement("li", "list-group-item border-0 text-danger", weaknessItem);
        weaknessesList.append(weaknessesItem);
    }

    pokemonList.append(pokemonItem);
    pokemonItem.append(pokemonCard);
    pokemonCard.append(pokemonImg, cardBody);
    cardBody.append(pokemonName, pokemonWeakness, weaknessesList, pokemonHeight, pokemonWeight);

}




