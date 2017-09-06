(function() {

    var PokedexService =  function(pokedexDal) {
        
    	this.getPokemon = function()
        {
            return pokedexDal.getPokemon();
        };
    };

    angular.module('pokedex').service('pokedexService', ['pokedexDal', PokedexService]);
}());