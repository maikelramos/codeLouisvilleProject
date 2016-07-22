(function (){
  'use strict';
  window.app.controller('displayController', displayController);

  displayController.$inject = ['registerService', '$stateParams'];

  function displayController (registerService, $stateParams){
      var vm = this;
      vm.people = [];
        registerService.loadAll($stateParams.id);
          vm.people = registerService.people;
  }
})();
