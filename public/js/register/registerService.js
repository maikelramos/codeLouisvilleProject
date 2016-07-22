(function () {
    'use strict';

    Object.defineProperty(Array.prototype, 'count', {
        get: function () { return this.length; }
    });

    if (Array.prototype.addRange) return;

    Array.prototype.addRange = function (target) {
        this.push.apply(this, target);
    };

})();
(

  function(){
      'use strict';
      window.app.service('registerService', registerService);
      registerService.$inject = ['$http'];
      function registerService($http){
        var people = [], svcError = null;

        var svc = {
          people :people,
          error : null,
          loadAll : getAll,
          add : add
        }


        return svc;


       function getAll (id){
         return $http.get('/api/app').success(function(data){
           people.splice(0);
           for (var i = 0; i < data.people.length; i++) {
             if(data.people[i].business == id){
               people.push(data.people[i])
             }
           }
         })
        }


      function add (person){
        return  $http.post('/api/app', person).then(
              function success(response){
                people.push(person)

              },
              function error(response){
                svc.error = "Error processing information"
              
              }
            )

        }
      }
  }
)();
