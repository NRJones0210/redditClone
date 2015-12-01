app.controller('redditController', function($scope) {

  $scope.showPostForm = function() {
    $scope.newPostForm.visable = ($scope.newPostForm.visable === true) ? false : true
  }
  
})
