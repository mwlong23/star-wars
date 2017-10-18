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
    value: function search(searchTerm) {
      $.get("https://swapi.co/api/people/?search=" + searchTerm).then(function (response) {
        return response;
      }).fail(function (error) {
        console.log(error.responseText);
      });
    }
  }]);

  return StarWarsSearch;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _starWars = require("./../js/star-wars.js");

var search = function search(searchTerm) {
  $.get("https://swapi.co/api/people/?search=" + searchTerm).then(function (response) {
    displayData(response);
  }).fail(function (error) {
    console.log(error.responseText);
  });
};

var displayData = function displayData(response) {
  console.log(response);
  $("#name").text(response.results[0].name);
  $("#gender").text("Gender: " + response.results[0].gender);
  $("#height").text("Height: " + response.results[0].height + " cm");
  $("#birth-year").text("Born: " + response.results[0].birth_year);
  $("#eye-color").text("Eye Color: " + response.results[0].eye_color);
  $("#hair-color").text("Hair Color: " + response.results[0].hair_color);
};

$(document).ready(function () {
  $('#search').submit(function (event) {
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    var result = search(searchTerm);
    console.log(result);
  });
});

},{"./../js/star-wars.js":1}]},{},[2]);
