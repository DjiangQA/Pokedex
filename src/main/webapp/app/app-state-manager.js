"use strict";

(function () {

    angular.module('pokedex').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokesearch");

        $stateProvider.state("pokesearch", {
            url: "/pokesearch",
            templateUrl: "app/feature/pokesearch/pokesearch.html"
        })
            .state("user", {
            url: "/user",
            templateUrl: "app/feature/user/user.html"
        })
            .state("pokelist", {
            url: "/pokelist",
            templateUrl: "app/feature/pokelist/.html"
        })
            .state("pokebattle", {
            url: "/pokebattle",
            templateUrl: "app/feature/pokebattle/.html"
        })
            .state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        })
    });
}());