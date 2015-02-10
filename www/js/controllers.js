angular.module('myControllers', [])

//Feed Controller
.controller('FeedCtrl', ["$scope", "$firebase", "fireRoutes", function($scope, $firebase, fireRoutes){
  $scope.posts = $firebase(fireRoutes.refPosts());
}])

//Post Controller
.controller('PostCtrl', ["$scope", "$firebase", "fireRoutes", "$location", function($scope, $firebase, fireRoutes, $location){
  $scope.addPost = function() {
    var post = {
      title: $scope.post.title
    };
    $firebase(fireRoutes.refPosts()).$add(post);
    $location.path("/feed");
  }; 
}]);