(function() {

    var UserController =  function() {
        var vm = this;
        vm.username = "David";
    };

    angular.module('pokedex').controller('userController', [UserController]);
}());