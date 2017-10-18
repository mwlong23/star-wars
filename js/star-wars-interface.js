import { StarWarsSearch } from './../js/star-wars.js';

var titleCase = function(string){
  let stringArray = string.split("_");
  stringArray = stringArray.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return stringArray.join(" ");
}

var displayData = function(response) {
  console.log(response);
  Object.keys(response.results[0]).forEach(function(key){
    $('.results').append(`<strong>${titleCase(key)}:</strong> ${response.results[0][key]}<br>`);
  });

}

$(document).ready(function() {
  const starWars = new StarWarsSearch();

  $('#search').submit(function(event) {
    event.preventDefault();
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
