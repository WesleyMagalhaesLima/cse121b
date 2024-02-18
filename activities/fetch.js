// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    results = data;
    pokemonOutputElement = document.querySelector("#output")
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    pokemonOutputElement.innerHTML = html;
    console.log("first: ", results);
}


async function getPokemonList(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      doStuffList(data);
    }
  }

function doStuffList(data) {
    console.log(data);
    const pokemonListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach(element => {
       const html = `<li>${element.name}</li>`;
       pokemonListElement.innerHTML += html;
    });
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);