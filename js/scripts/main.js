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
    const element = document.createElement("div");
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
    element.innerHTML = cardHtml;
    element.addEventListener("click", async () => {
        const pokemonData = await getAxios(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const pokemonModal = buildPokemonModalInfo(pokemonData);
        const footerElement = document.querySelector('footer');
        footerElement.insertAdjacentHTML('afterend', pokemonModal);
        openDetailsPokemon();
    });
    return element;
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
    for (const pokemon of listPokemons) {
        const pokemonDetails = await getAxios(pokemon.url);
        const pokemonCard = buildPokemonCard(pokemonDetails);
        jsListPokemons.appendChild(pokemonCard);
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
        jsListPokemons.appendChild(pokemonCard);
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

function buildPokemonModalInfo(pokemon) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('type-pokemon-modal', pokemon.types[0].type.name);
    modal.setAttribute('id', 'js-modal-details');
    document.body.insertBefore(modal, document.querySelector('script'));

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    modal.appendChild(overlay);
    
    const box = document.createElement('div');
    box.classList.add('box');
    modal.appendChild(box);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close', 'js-close-modal-details-pokemon');
    closeButton.innerHTML = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 4.75L4.75 14.25" stroke="#4D5053" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.75 4.75L14.25 14.25" stroke="#4D5053" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    closeButton.addEventListener('click', closeDetailsPokemon);
    box.appendChild(closeButton);

    const leftContent = `<div class="left-container">
        <div class="icon">
            <img src="img/icon-types/${pokemon.types[0].type.name}.svg" id="js-image-type-modal" alt="">
        </div>
        <div class="image">
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" id="js-image-pokemon-modal">
        </div>
    </div>`;

    const types = pokemon.types;
    const typesElementList = types.map(({ type }) => `<li>
    <span class="tag-type ${type.name}">${type.name}</span>
    </li>`);
    
    console.log(pokemon);

    const rightContent = `<div class="right-container">
        <div class="name">
            <h2 id="js-name-pokemon-modal">${pokemon.name}</h2>
            <span id="js-code-pokemon-modal">#${String(pokemon.id).padStart(3, '0')}</span>
        </div>
        <ul class="type" id="js-types-pokemon">
            ${ typesElementList }
        </ul>
        <ul class="info">
            <li>
                <span>Height</span>
                <strong id="js-height-pokemon">${pokemon.height}</strong>
            </li>
            <li>
                <span>Weight</span>
                <strong id="js-weight-pokemon">${pokemon.weight}</strong>
            </li>
            <li>
                <span>Abilities</span>
                <strong id="js-main-abilities">Overgrow</strong>
            </li>
        </ul>
        <div class="weak">
            <h4>Weaknesses</h4>
            <ul id="js-area-weak">
                <li>
                    <span class="tag-type water">Water</span>
                </li>
                <li>
                    <span class="tag-type electric">Electric</span>
                </li>
            </ul>
        </div>
        <div class="stats">
            <h5>Stats</h5>
            <div class="all">
                <div class="item">
                    <span>HP</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-hp"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <span>Attack</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-attack"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <span>Defense</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-defense"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <span>Sp. attack</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-sp-attack"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <span>Sp. defense</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-sp-defense"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <span>Speed</span>
                    <div class="bar-status">
                        <div class="bar" id="js-stats-speed"></div>
                        <ul class="separator">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    box.insertAdjacentHTML('beforeend', leftContent);
    box.insertAdjacentHTML('beforeend', rightContent);

    return modal;
}

getPokemonsTotalCount('https://pokeapi.co/api/v2/pokemon');
listingTypes();
listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
handleSearchSubmit();