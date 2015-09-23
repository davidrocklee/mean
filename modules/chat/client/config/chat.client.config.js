'use strict';

// Configuring the Chat module
angular.module('chat').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Chat',
      state: 'chat',
// DL -- removed all roles so Chat menu does not appear at all
      roles: []
    });
  }
]);
