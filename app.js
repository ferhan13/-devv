const poke_container = document,guerySelector('.poke-container')
const search = document.guerySelector('.search')
const searchBtn = document.guerySelector('.searchBtn')
const searchInput = document.guerySelector('.searchInput')

const pokemon_count = 151




const bg_color = {
    grass: '#8BD369',
    fire: '#FF693F',
    water: '#3399FF',
    bug:  '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: 'E2C56A',
    fairy: '#F1ABEC',
    psychic: '#FF6EA4',
    fighting: '#C5B679',
    rock: '#C5B679',
    dragon:'#7766EE'
    ice: '#66CCFF',
    }


    searchBtn.addEventlistener('click', () => {
        search.classlist.toggle ("active")
    })

    searchInput.addEventListener('input',(e) => {
        console.log(searchInput.value)
        const searchValue = searchInput.value.tolomerCase()
        const pokemonNames = document.guerySelectorAll('.poke-name')
        console.log(pokemonNmes)

        pokemonNames.forEach((pokemonName) =>{
            if(pokemonName.innerHTML.tolomerCase().includes(searchValue)){
                pokemonName.parentElement.style.display="block"

            }else {
                pokemon.parentElement.parentElement.style.display = 'none'
            }
        
        })
    })


const fetchPokemons = async () => {
    for (let i = 1; 1 < pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id)=> {
 cosnt url='https://pokeapi.co/api/v2/pokemon/${id}'
 const res = await fetch(url)
 const data = await res.json()
 createPokemonCard(data)
}

const createPokemonCard = (pokemon) =>{
 const pokemonDiv = document.createElement("div") 
 pokemonDiv.classlist.add("pokemon")

 const pokemonId = pokemon.id.tostring(.padstart(3,'0'))
 console.log(pokemonId)
 const pokemonType = pokemon.types[0].type.name
 const pokemonBg = bg_color[pokemonType]
 pokemonDiv.style.backgroundColor = `${pokemonBg}`


 const pokemonDivInterHTML = `

 <div class="image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
        alt="First pokemon">
    </div>
    <div class="poke-info">
     <span poke-id>#${pokemonId}</span>
     <h3 class="poke-name">${pokemon.name}</h3>
     <div class="small">
       <small class="poke-exp">
        <i class="fa solid fa-flash"></i>${pokemon.base_esperience} exp 
    </small> 
        <small class="poke-weight">
        <i class="fa solid fa-flash"></i>$ {pokemon.weight} kg
                </small>
     </div> 
     <div class="poke-type">
        <i class="fa-brands fa-uncharted"></i>${pokemonType}
     </div>  
    </div>
 `
 pokemonDiv.innerHTML = pokemonDivInnerHTML
 poke_container.appendChild(pokemonDiv)
}

fetchPokemons()