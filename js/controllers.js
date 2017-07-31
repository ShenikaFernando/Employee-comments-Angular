'use strict';

angular.module('myApp.controllers', [])
    .controller('PostListController', ['$scope', 'Post', 'User', function ($scope, Post, User) {
        var users = User.query();

        var posts = Post.query(function () {
            angular.forEach(posts, function (value, key) {
                posts[key].user = users[value.userId - 1];
            });
        });

        $scope.users = users;
        $scope.posts = posts;
    }])
    .controller('UserPostsListController', ['$scope', '$stateParams', 'User', 'UserPosts', function ($scope, $stateParams, User, UserPosts) {
        var id = $stateParams.id;

        $scope.users = User.query();
        $scope.posts = UserPosts.query({id: id});
    }])
    .controller('CommentListPostController', ['$scope', '$stateParams', 'Post', 'CommentsPost', function ($scope, $stateParams, Post, CommentsPost) {
        var id = $stateParams.id;

        $scope.post = Post.get({id: id});
        $scope.comments = CommentsPost.query({id: id});
    }])
    .controller('SendEmailController', ['$scope', '$stateParams', '$state', 'User', function ($scope, $stateParams, $state, User) {
        var id = $stateParams.id;
        $scope.user = User.get({id: id});

        $scope.sentEmail = function () {
            $state.go('sentEmail');
        };
    }])
;