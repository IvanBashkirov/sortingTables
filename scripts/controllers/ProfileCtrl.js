(function() {
  function ProfileCtrl($scope, DataSearch, $stateParams) {


    //Private attributes
    const id = $stateParams.id;
    const dataPromise = DataSearch.dataPromise;
    const makeTypeaheadValues = DataSearch.makeTypeaheadValues;


    //Public attributes
    this.friends = [];
    this.person = null;
    this.typeaheadValues = [];
    this.mySearch = "";
    this.sort = 'id';
    this.matchedFriends = [];


    //Private methods
    const matchPeople = DataSearch.matchPeople;


    //Public methods
    this.genderFAIcon = DataSearch.genderFAIcon;


    // Initialize
    dataPromise().success((data) => {
      this.person = data.find(p => p.id == id);
      this.friends = this.person.friends;
      this.typeaheadValues = makeTypeaheadValues(this.friends);
      this.matchedFriends = matchPeople(this.friends, this.typeaheadValues, this.mySearch);
    });


    // Watch for changes on user input
    $scope.$watch('profile.mySearch', () => this.matchedFriends = matchPeople(this.friends, this.typeaheadValues, this.mySearch)); //apply user search filter only

  }

  angular
    .module('polecat')
    .controller('ProfileCtrl', ['$scope', 'DataSearch', '$stateParams', ProfileCtrl]);
})()
