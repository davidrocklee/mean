'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Services',
      state: 'articles',
      type: 'dropdown',
// DL - services menu is only available after you log in
      roles: ['user', 'admin', 'supervisor', 'technician']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Services',
      state: 'articles.list',
// DL - list services is only available after you log in
      roles: ['user', 'admin', 'supervisor', 'technician']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Create Services',
      state: 'articles.create',
// DL - create services is only available to all roles but user
      roles: ['admin', 'supervisor', 'technician']
    });
  }
]);
