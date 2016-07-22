(function (){
  window.app.controller('registerController', registerController);

  registerController.$inject = ['registerService',  '$location'];

  function registerController (registerService, $location){
      var vm = this;
      vm.errorMessage = null;
      vm.add = add;
      vm.hasError = hasError;

      this.person = {
        firstName : "",
        lastName : "",
        business : "",
        email : "",
        phoneNumber : ""
      }


      function hasError(){
        return vm.errorMessage != null;
      }
      function add(){

        registerService.add(vm.person).then(function(){
          vm.errorMessage = registerService.error;
          if(!vm.hasError()){
             $location.path('/display');
          }

        });

      }
  }
})();
