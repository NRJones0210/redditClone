app.controller('redditController', function($scope) {

  $scope.showPostForm = function() {
    $scope.newPostForm.visable = ($scope.newPostForm.visable === true) ? false : true
  }

  $scope.posts = [];

  $scope.addPost = function() {
    $scope.posts.push({
      title: $scope.newPost.title,
      author: $scope.newPost.author,
      image: $scope.newPost.image,
      description: $scope.newPost.description,
      voteCount: 0,
      date: Date.now(),
      comments: []
    })
    $scope.newPost = {};
    $scope.newPostForm.visible = false;
    console.log($scope.posts)
  };
  
})
