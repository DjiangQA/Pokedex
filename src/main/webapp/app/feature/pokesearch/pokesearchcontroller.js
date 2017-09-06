(function() {

    var SearchController =  function(pokedexService)
    {
        var vm = this;

        function init() {
            pokedexService.getPokemon().then(function (results) {
            	 console.log("In Pokemon controller about to return data to the client with results " + results);
            	 vm.pokemons  = results;
             }, function (error) {
                 vm.error = true;
                 vm.errorMessage = error;
             });
        }
        
        init();
    };
    angular.module('pokedex').controller('SearchController', ['pokedexService', SearchController ]);
}());