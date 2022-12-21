var cardWrapper=document.querySelector('.card-wrapper');
let elSelect=document.querySelector('.js-select');


function newcards (array, node){
    node.innerHTML=''
    for(pokemon of array){
  
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
    
    
        node.appendChild(card);
    }
}


newcards(pokemons, cardWrapper);



let arr=[];

pokemons.forEach((item)=>{
    item.type.forEach((type)=>{
       if(!arr.includes(type)){
        arr.push(type);
    };
})
})

for(i of arr){
    let option=document.createElement('option');
    option.value=i;
    option.textContent=i;
    elSelect.appendChild(option)
}


let newArr=[];
elSelect.addEventListener('change',(e)=>{
    newArr=[]

if(elSelect.value!=="All"){
    pokemons.forEach((pok)=>{
        if(pok.type.includes(elSelect.value)){
            newArr.push(pok)
        }
    })
    newcards(newArr, cardWrapper)
}else{
    newcards(pokemons, cardWrapper)
}
    
})

// search

let elFrom = document.querySelector('.form');
let elInput = document.querySelector('input');

let newArray=[];

elFrom.addEventListener('input',(evt)=>{
    evt.preventDefault();
    cardWrapper.innerHTML=''
    let elInputValue=elInput.value.toLocaleLowerCase();

    pokemons.forEach((el)=>{
        if(el.name.toLocaleLowerCase().includes(elInputValue)){
            newArray.push(el)
        }
    });
    newcards(newArray, cardWrapper)
    newArray=[]
});

// sort

let elSelect2=document.querySelector('#sort');


elSelect2.addEventListener('change',(e)=>{
    let elSelect2Val=elSelect2.value;
    if(elSelect2Val != "Sort"){
        if(elSelect2Val == "A-Z"){
            const pokemonSort = pokemons.sort((a, b)=> a.name.charCodeAt(0)-b.name.charCodeAt(0));
            newcards(pokemonSort, cardWrapper);
        }
        else if(elSelect2Val == "Z-A"){
            const pokemonSort2 = pokemons.sort((a, b)=> b.name.charCodeAt(0)-a.name.charCodeAt(0));
            newcards(pokemonSort2, cardWrapper);
        }
    }
    else{
        window.location.reload();
    }
    
    e.preventDefault();
})