(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StarWarsSearch = exports.StarWarsSearch = function () {
  function StarWarsSearch() {
    _classCallCheck(this, StarWarsSearch);
  }

  _createClass(StarWarsSearch, [{
    key: "search",
    value: function search(searchTerm, category) {
      return $.get("https://swapi.co/api/" + category + "/?search=" + searchTerm);
    }
  }]);

  return StarWarsSearch;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _starWars = require("./../js/star-wars.js");

var titleCase = function titleCase(string) {
  var stringArray = string.split("_");
  stringArray = stringArray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return stringArray.join(" ");
};

var displayData = function displayData(response) {
  console.log(response);
  Object.keys(response.results[0]).forEach(function (key) {
    $('.results').append("<strong>" + titleCase(key) + ":</strong> " + response.results[0][key] + "<br>");
  });
};

$(document).ready(function () {
  var starWars = new _starWars.StarWarsSearch();

  $('#search').submit(function (event) {
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    var category = $('#category').val();
    var responsePromise = starWars.search(searchTerm, category);
    responsePromise.then(function (response) {
      displayData(response);
    }).fail(function (error) {
      $('.results').append("<h3>There was an error: " + error.responseText + " </h3>");
    });
  });
});

},{"./../js/star-wars.js":1}]},{},[2]);
