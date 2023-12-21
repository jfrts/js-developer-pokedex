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

function concatInnerHTML(id, content) {
    const item = document.getElementById(id);
    item.innerHTML += content;
}

async function getAxios(url) {
    const { data } = await axios.get(url);
    return data;
};

async function getPokemonsTotalCount() {
    const { count } = await getAxios('https://pokeapi.co/api/v2/pokemon');
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
let offsetCount = 10;

function loadMore(url) {
    listingPokemons(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offsetCount}`);
    offsetCount += 9;
}

button.addEventListener("click", loadMore);

async function listingPokemons(url) {
    const { results: listPokemons } = await getAxios(url);
    for (const pokemon of listPokemons) {
        const pokemonDetails = await getAxios(pokemon.url);
        const pokemonCard = buildPokemonCard(pokemonDetails);
        concatInnerHTML("js-list-pokemons", pokemonCard);
    }
}


getPokemonsTotalCount();
// listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");