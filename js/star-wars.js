
export class StarWarsSearch {
  search(searchTerm, category) {
    return $.get(`https://swapi.co/api/${category}/?search=${searchTerm}`);
  }
}
