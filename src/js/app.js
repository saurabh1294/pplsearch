"use strict";
var app = angular.module("peopleList", []);
app.controller("PeopleListCtrl", function($scope, $filter, searchService) {
	// initialize data here - acts as constructor
    $scope.peopleList = peopleList;
    $scope.filteredPeople = $scope.peopleList;
	// set data into service for use by another controller
	searchService.setData($scope);
});

app.service('searchService', function() {
	// service getter method
    this.getData = function () {
        return this.data;
    };
	
	// service setter method
	this.setData = function (scope) {
		this.data = {
			'scope' : scope,
			'usersList' : scope.peoplelist,
			'filteredPeople' : scope.filteredPeople
		};
	};
});

// search filter controller
app.controller("searchCtrl", function($scope, $filter, searchService) {
	 $scope.$watch('searchQuery', function(query) {
		var scopeData = searchService.getData();	// get scope data from main controller
		scopeData.scope.filteredPeople = query ? $filter('filter')(scopeData.scope.peopleList, query) : scopeData.scope.peopleList;	// filter search results based on search query
    });
});

