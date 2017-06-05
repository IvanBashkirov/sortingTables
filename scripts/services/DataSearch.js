(function() {
  function DataSearch($http, $filter) {

    // Private methods

    /* remove duplicates */
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    //Public methods

    /* get data, return promise */
    const dataPromise = () => $http.get('/data.json');

    /* generate gender icon */
    const genderFAIcon = (gender) => {
      if (!gender) return 'fa fa-lg fa-question';
      gender = gender.toLowerCase();
      return 'fa fa-lg ' + ((gender == 'female' || gender == 'male') ? `fa-${gender}` : 'fa-question');
    }

    /* user search filter */
    const matchPeople = (people, typeaheads, searchString) => {
      const vals = $filter("filter")(typeaheads, searchString);
      return people.filter(x => vals.indexOf(x.first_name) !== -1 ||
        vals.indexOf(x.last_name) !== -1 ||
        vals.indexOf(x.email) !== -1
      );
    }

    /* generated an array for the typeahead element */
    const makeTypeaheadValues = (people) => {
      const emails = people.map(f => f.email).filter(onlyUnique);
      const first_names = people.map(f => f.first_name).filter(onlyUnique);
      const last_names = people.map(f => f.last_name).filter(onlyUnique);
      return first_names.concat(last_names, emails);
    }

    // Pass to controller
    return {
      dataPromise,
      genderFAIcon,
      makeTypeaheadValues,
      matchPeople
    }
  }

  angular
    .module('polecat')
    .factory('DataSearch', ['$http', '$filter', DataSearch]);
})();
