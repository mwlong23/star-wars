export class StarWarsSearch {
  search(searchTerm) {
    $.get(`https://swapi.co/api/people/?search=${searchTerm}`)
      .then(function(response) {
        return response;
      })
      .fail(function(error) {
        console.log(error.responseText);
      });
  }
}
