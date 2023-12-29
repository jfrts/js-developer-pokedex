// scripts do slide principal
var slide_hero = new Swiper(".slide-hero", {
    effect: 'fade',
    pagination: {
        el: ".slide-hero .main-area .area-explore .swiper-pagination",
    },
});

const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const btnCloseModal = document.querySelector('.js-close-modal-details-pokemon');
const countPokemons = document.getElementById('js-count-pokemons');

cardPokemon.forEach(card => {
    card.addEventListener('click', openDetailsPokemon);
})

if (btnCloseModal) {
    btnCloseModal.addEventListener('click', closeDetailsPokemon);
}

const btnDropdownSelect = document.querySelector('.js-open-select-custom');

btnDropdownSelect.addEventListener('click', () => {
    btnDropdownSelect.parentElement.classList.toggle('active');
})

const areaPokemons = document.getElementById('js-list-pokemons');

function openDetailsPokemon() {
    document.documentElement.classList.add('open-modal');
}

function closeDetailsPokemon() {
    document.documentElement.classList.remove('open-modal');
}

function setInnerText(id, content) {
    const item = document.getElementById(id);
    item.innerText = content;
}

function setInnerHTML(id, content) {
    const item = document.getElementById(id);
    item.innerHTML = content;
}

function concatInnerHTML(id, content) {
    const item = document.getElementById(id);
    item.innerHTML += content;
}

async function getAxios(url) {
    const { data } = await axios.get(url);
    return data;
};

async function getPokemonsTotalCount(url) {
    const { count } = await getAxios(url);
    setInnerText('js-count-pokemons', count);
}

function buildPokemonCard(pokemon) {
    const cardHtml = `<button class="card-pokemon ${pokemon.types[0].type.name} js-open-details-pokemon">
    <div class="image">
      <img src="${pokemon.sprites.other.dream_world.front_default}" class="thumb-img">
    </div>
    <div class="info">
      <div class="text">
        <span>#${String(pokemon.id).padStart(3, '0')}</span>
        <h3>${pokemon.name}</h2>
      </div>
      <div class="icon">
        <img src="img/icon-types/${pokemon.types[0].type.name}.svg">
      </div>
    </div>
  </button>`;
    return cardHtml;
}

const button = document.getElementById("js-btn-load-more");
let offsetCount = 9;

function loadMore(url) {
    listingPokemons(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offsetCount}`);
    offsetCount += 9;
}

button.addEventListener("click", loadMore);

async function listingPokemons(url) {
    const { results: listPokemons } = await getAxios(url);
    const jsListPokemons = document.getElementById("js-list-pokemons");
    jsListPokemons.innerHTML = "";
    for (const pokemon of listPokemons) {
        const pokemonDetails = await getAxios(pokemon.url);
        const pokemonCard = buildPokemonCard(pokemonDetails);
        concatInnerHTML("js-list-pokemons", pokemonCard);
    }
}

async function listingPokemonsByType(id) {
    const { pokemon: listPokemons } = await getAxios(`https://pokeapi.co/api/v2/type/${id}`);
    setInnerText('js-count-pokemons', listPokemons.length);
    const jsListPokemons = document.getElementById("js-list-pokemons");
    jsListPokemons.innerHTML = "";
    for (const { pokemon } of listPokemons) {
        const pokemonDetails = await getAxios(pokemon.url);
        const pokemonCard = buildPokemonCard(pokemonDetails);
        concatInnerHTML("js-list-pokemons", pokemonCard);
    }
}

function buildTypeFilterButton({ name, id }) {
    const element = document.createElement("li");
    const typeButtonHTML = `<button class="type-filter ${name}" code-type="${id}">
        <div class="icon">
        <img src="img/icon-types/${name}.svg" alt="">
        </div>
        <span>${name}</span>
    </button>`;
    element.innerHTML = typeButtonHTML;
    element.addEventListener("click", () => {
        console.log("clicouuuu");
        listingPokemonsByType(id);
    });
    return element;
}

function getTypeIdWithRegex(urlData) {
    const regex = /\/(\d+)\/$/;
    const match = urlData.match(regex);
    if (match) {
        return match[1];
    }
}

async function listingTypes() {
    const { results: types } = await getAxios("https://pokeapi.co/api/v2/type");
    const jsTypeArea = document.getElementById("js-type-area");
    const jsTypeAreaMobile = document.getElementById("js-type-area-mobile");
    for (const type of types) {
        if (type.name !== "unknown" && type.name !== "shadow") {
            const typeId = getTypeIdWithRegex(type.url);
            const typeObject = { name: type.name, id: typeId };
            const typeFilterElement = buildTypeFilterButton(typeObject);
            const typeFilterElementMobile = buildTypeFilterButton(typeObject);
            jsTypeArea.appendChild(typeFilterElement);
            jsTypeAreaMobile.appendChild(typeFilterElementMobile);
        }
    }
}

async function searchPokemonByNameOrId(nameOrId) {
    const jsListPokemons = document.getElementById("js-list-pokemons");
    jsListPokemons.innerHTML = "";
    try {
        const pokemon = await getAxios(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        setInnerText('js-count-pokemons', 1);
        const pokemonCard = buildPokemonCard(pokemon);
        concatInnerHTML("js-list-pokemons", pokemonCard);
    } catch (error) {
        setInnerText('js-count-pokemons', 0);
        button.style.display = "none";
    }
}

function handleSearchSubmit() {
    const input = document.getElementById("js-input-search"); 
    input.addEventListener("keypress", (event) => {
        const inputValue = String(input.value).toLocaleLowerCase().trim();
        if (event.key === "Enter") {
            if (inputValue === "") {
                listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
                getPokemonsTotalCount('https://pokeapi.co/api/v2/pokemon');
            } else {
                searchPokemonByNameOrId(inputValue);
            }
        }
    })
}

getPokemonsTotalCount('https://pokeapi.co/api/v2/pokemon');
listingTypes();
listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
handleSearchSubmit();