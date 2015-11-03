'use strict';

// Configure the 'chat' module routes
angular.module('chat').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat',
        templateUrl: 'modules/chat/client/views/chat.client.view.html',
        data: {
// DL -- add all roles so Chat menu appears if logged in
          roles: ['admin','supervior','technician','user']
        }
      });
  }
]);
