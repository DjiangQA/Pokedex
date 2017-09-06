(function() {

    var DoSortService =  function() {
        this.doSort = function()
        {
            this.sortby = 'name';
            this.reverse= !this.reverse
        };
    };

    angular.module('pokedex').service('DoSortService', [DoSortService]);
}());