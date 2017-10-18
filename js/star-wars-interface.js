import { StarWarsSearch } from './../js/star-wars.js';

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
  $("#name").text(response.results[0].name);
  // $("#gender").text(`Gender: ${response.results[0].gender}`);
  // $("#height").text(`Height: ${response.results[0].height} cm`);
  // $("#birth-year").text(`Born: ${response.results[0].birth_year}`);
  // $("#eye-color").text(`Eye Color: ${response.results[0].eye_color}`);
  // $("#hair-color").text(`Hair Color: ${response.results[0].hair_color}`);
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
