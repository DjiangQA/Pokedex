(function() {

    var PokedexMoteInfoService =  function(pokedexDal) {
        
    	this.getPokemon = function()
        {
            return pokedexDal.getPokemon();
        };
    };

    angular.module('pokedex').service('pokedexMoteInfoService', ['pokedexDal', PokedexMoteInfoService]);
}());