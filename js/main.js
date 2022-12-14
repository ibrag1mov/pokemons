var cardWrapper=document.querySelector('.card-wrapper');

for(pokemon of pokemons){
    // console.log(pokemon.name);

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
    `

    
    cardWrapper.appendChild(card);
    
 
}

