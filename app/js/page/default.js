define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  // var MyComponent = require('component/my_component');

  var Navigation = require('component/navigation');
  var MainContent = require('component/mainContent');
  var Footer = require('component/footer');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Navigation.attachTo(document.getElementById('navigation'));
    MainContent.attachTo(document.getElementById('main_content'));
    Footer.attachTo(document.getElementById('footer'));
  }

});
