
export class StarWarsSearch {
  search(searchTerm, category) {
    $.get(`https://swapi.co/api/${category}/?search=${searchTerm}`)
      .then(function(response) {
        displayData(response);
      })
      .fail(function(error) {
        console.log(error.responseText);
      });
  }
}
