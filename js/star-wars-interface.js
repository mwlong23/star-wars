import { StarWarsSearch } from './../js/star-wars.js';
const starWars = new StarWarsSearch();

let titleCase = function(string){
  let stringArray = string.split("_");
  stringArray = stringArray.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return stringArray.join(" ");
}

let displayData = function(response) {
  let result = response.results[0];
  Object.keys(result).forEach(function(key){
    console.log(result[key]);
    if (typeof(result[key]) === 'object') {
      $('.results').append(`<strong>${titleCase(key)}:</strong><div class=${key}></div>`);
      result[key].forEach(function(url) {
        let infoPromise = starWars.find(url);
        infoPromise.then(function(response) {
          if (response.hasOwnProperty("name")) {
            $(`.${key}`).append(`${response.name}<br>`);
          } else {
            $(`.${key}`).append(`${response.title}<br>`);
          }
        })
        .fail(function(error) {
          console.log(error);
        });
      })
    } else {
      if (typeof(result[key]) ==="string" && result[key].startsWith('https')) {
        // api call madness!
        let infoPromise = starWars.find(result[key]);
        infoPromise.then(function(response) {
          $('.results').append(`<strong>${titleCase(key)}:</strong> ${response.name}<br>`);
        })
        .fail(function(error) {
          console.log(error);
        });
      } else {
        $('.results').append(`<strong>${titleCase(key)}:</strong> ${result[key]}<br>`);
      }
    }
  });
}

$(document).ready(function() {

  $('#search').submit(function(event) {
    event.preventDefault();
    $('.results').html("");
    let searchTerm = $('#search-term').val();
    let category = $('#category').val();
    let responsePromise = starWars.search(searchTerm, category);
    responsePromise.then(function(response) {
      displayData(response);
    })
    .fail(function(error) {
      $('.results').append(`<h3>There was an error: ${error.responseText} </h3>`);
    });
  });
});
