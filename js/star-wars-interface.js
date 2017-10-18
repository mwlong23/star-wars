import { StarWarsSearch } from './../js/star-wars.js';

var titleCase = function(string){
  let stringArray = string.split("_");
  stringArray = stringArray.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return stringArray.join(" ");

}

var search = function(searchTerm, category) {
  $.get(`https://swapi.co/api/${category}/?search=${searchTerm}`)
    .then(function(response) {
      displayData(response);
    })
    .fail(function(error) {
      console.log(error.responseText);
    });
}

var displayData = function(response) {
  console.log(response);
  Object.keys(response.results[0]).forEach(function(key){
    $('.results').append(`<strong>${titleCase(key)}:</strong> ${response.results[0][key]}<br>`);
  });

}

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    let searchTerm = $('#search-term').val();
    let category = $('#category').val();
    let result = search(searchTerm, category);
    console.log(result);
  });
});
