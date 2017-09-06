"use strict";

(function () {

    angular.module("pokedex").service("pokedexDal", ["dal", PokedexDal]);

    function PokedexDal (dal) {

        this.getPokemon = function () {
            var pokemoninfo = dal.http.GET("http://pokeapi.co/api/v2/pokemon/");
            var pokemoninfo2 = dal.http.GET("http://pokeapi.co/api/v2/pokemon/?offset=20");
            //trying to add 2 search together, still work in progress
            console.log(pokemoninfo);
            return pokemoninfo;
        };

        this.savePokemon = function (PokemonToSave) {
            return dal.http.POST("http://pokeapi.co/api/v2/pokemon/", PokemonToSave);
        };

        this.updatePokemon  = function (PokemonToUpdate) {
            return dal.http.PUT("http://pokeapi.co/api/v2/pokemon/", PokemonToUpdate);
        };

        this.deletePokemon  = function (PokemonToDelete) {
            return dal.http.DELETE("http://pokeapi.co/api/v2/pokemon/", PokemonToDelete);
        };

    }
}());
