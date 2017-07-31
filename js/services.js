var root = 'https://jsonplaceholder.typicode.com';

angular.module('myApp.services', [])
    .factory('Post', function ($resource) {
        return $resource(root + '/posts/:id', {id: '@id'});
    })
    .factory('CommentsPost', function ($resource) {
        return $resource(root + '/posts/:id/comments', {id: '@id'});
    })
    .factory('UserPosts', function ($resource) {
        return $resource(root + '/posts?userId=:id', {id: '@id'});
    })
    .factory('Comment', function ($resource) {
        return $resource(root + '/comments/:id', {id: '@id'});
    })
    .factory('User', function ($resource) {
        return $resource(root+'/users/:id', {id: '@id'});
    })
;