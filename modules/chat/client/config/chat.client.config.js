'use strict';

// Configuring the Chat module
angular.module('chat').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Chat',
      state: 'chat',
// DL -- add all roles so Chat menu appears if logged in
      roles: ['admin','supervior','technician','user']
    });
  }
]);
