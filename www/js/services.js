angular.module('myServices', [])

.factory('fireRoutes', function($firebase) {
  var ref = new Firebase("https://ionic-tutorial-ga.firebaseio.com/"),
      refPosts = new Firebase("https://ionic-tutorial-ga.firebaseio.com/posts");
  return {
    ref: function() {
        return ref;
    },
    refPosts: function() {
        return refPosts;
    }
  }
});