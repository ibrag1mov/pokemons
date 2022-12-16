var cardWrapper=document.querySelector('.card-wrapper');
// let elSelect=document.querySelector('.js-select');

function pokemonFunc(pokemons){
    for(pokemon of pokemons){
  
        let card=document.createElement('div');
        card.setAttribute('class', 'card pt-4 my-2 px-2 text-white m-1 col-3');
    
        card.innerHTML=`
            <strong class="pocemon-id px-4 fs-2">${pokemon.id}</strong>
            <div class="text-center mt-4">
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <h2 class="text-center my-2">${pokemon.name}</h2>
            <div class="d-flex justify-content-evenly">
                <p class="fs-5 text-center">weight 
                    <span class="d-block size"> ${pokemon.weight} </span>
                </p>
                <p class="fs-5">height
                    <span class="d-block size"> ${pokemon.height} </span>
                </p>
            </div>
            <p class="text-center">${pokemon.type}</p>
           <div class="wrapper px-4 py-2 d-flex justify-content-between align-items-center">
                <p class="time">${pokemon.spawn_time}</p>
                <button type="button" class="btn btn-primary ">More</button>
           </div>
        `;
    
    
       
    
        cardWrapper.appendChild(card);
        
    
    }
    
}
var types = [
    "Poison","Fire","Grass","Water","Electric","Bug","Normal","Ground","Fighting","Psychic","Rock","Ice","Ghost","Flying","Dragon",
  ];
  
  var pokemonsVar = pokemons;
  
  var elSelect = document.querySelector("#select-js");
  for (var i of types) {
    var elOption = document.createElement("option");
    elOption.value = i;
    elOption.textContent = i;
    elSelect.appendChild(elOption);
  }
  
  elSelect.addEventListener("change", (element) => {
    var type = element.target.value;
    pokemonsVar = pokemons.filter((pok) => {
      return pok.type.includes(type);
    });
    pokemonFunc(pokemonsVar);
  });
  
pokemonFunc(pokemonsVar);


