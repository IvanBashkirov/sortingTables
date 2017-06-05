(function() {
  function LandingCtrl($scope, DataSearch) {


    // Private attributes
    let filteredPeople = []; // list of people after the gender filter applied


    // Private methods
    const dataPromise = DataSearch.dataPromise; //function for getting json (returns promise)
    const makeTypeaheadValues = DataSearch.makeTypeaheadValues; // function for making typeahead values from list of users
    const matchPeople = DataSearch.matchPeople; //user search filter

    /* Gender filter */
    const genderFilter = () => {
      const genderFilterArr = [];
      angular.forEach(this.genderCheckbox, (value, key) => {
        if (value) genderFilterArr.push(key);
      });
      return this.people.filter(x => genderFilterArr.indexOf(x.gender.toLowerCase()) !== -1);
    }

    /* Main filter function. Does 3 things
      Applies gender filter
      Generates typeahead values
      Filters through user search input */
    const filterPeople = () => {
      filteredPeople = genderFilter();
      this.typeaheadValues = makeTypeaheadValues(filteredPeople);
      this.matchedPeople = matchPeople(filteredPeople, this.typeaheadValues, this.mySearch);
    }


    // Public attributes
    this.title = "Polecat"
    this.mySearch = "";                 //user search input
    this.genderCheckbox = {             //gender filter checkbox
      male: true,
      female: true,
      other: true
    };
    this.people = [];                   // full unaltered list of people
    this.typeaheadValues = [];          // typeahead values generated from filtered people
    this.matchedPeople = [];            // filtered people
    this.sort = 'id';                   // "sort by" value


    //Public methods
    this.genderFAIcon = DataSearch.genderFAIcon; //generate a gender icon


    //initialize
    dataPromise().success((data) => {           //load data and filter
      this.people = data;
      filterPeople();
    });

    
    // Watch for changes on filters and search input
    $scope.$watchCollection('landing.genderCheckbox', filterPeople); //full re-filter on gender checkbox change
    $scope.$watch('landing.mySearch', () => this.matchedPeople = matchPeople(filteredPeople, this.typeaheadValues, this.mySearch));  //apply user search filter only
  }


  angular
    .module('polecat')
    .controller('LandingCtrl', ['$scope', 'DataSearch', LandingCtrl]);
})()
