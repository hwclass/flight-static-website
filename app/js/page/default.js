define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  // var MyComponent = require('component/my_component');

  var Navigation = require('component/navigation');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    // MyComponent.attachTo(document);
    Navigation.attachTo(document.getElementById('navigation'));
  }

});
