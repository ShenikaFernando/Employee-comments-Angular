'use strict';

angular.module('myApp', ['ui.router', 'ngResource', 'myApp.controllers', 'myApp.services'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: 'partials/posts.html',
                controller: 'PostListController'
            })
            .state('userPosts', {
                url: '/user/{id}/posts',
                templateUrl: 'partials/userPosts.html',
                controller: 'UserPostsListController'
            })
            .state('postsComments', {
                url: '/posts/{id}/comments',
                templateUrl: 'partials/comments.html',
                controller: 'CommentListPostController'
            })
            .state('sendEmail', {
                url: '/users/{id}/email',
                templateUrl: 'partials/send-email.html',
                controller: 'SendEmailController'
            })
            .state('sentEmail', {
                url: '/users/email/sent',
                templateUrl: 'partials/email-sent.html'
            })
        ;
    })
    .run(function ($state) {
        $state.go('posts');
    })
;