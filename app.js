angular.module("LunchCheck", [])
  .controller("lunchCheckController", lunchCheckController);

  lunchCheckController.$inject=['$scope'];

  function lunchCheckController($scope) {
      $scope.text = "";
      $scope.checagem = function () {
          var fun = $scope.text.split(',');
          var tamanho = fun.length;
          if($scope.text == ""){
              $scope.messageFinal='Enter data first.';
          }else{
              cond(tamanho);
          }

      }

      function cond(tamanho) {
          if(tamanho > 3){
              $scope.messageFinal='Too much';
          } else{
              $scope.messageFinal='Enjoy';
          }

      }
  }
