define(function (require) {

  var defineComponent = require('flight/lib/component');

  /*
  * define the component
  */
  return defineComponent(mainContent);

  function mainContent() {

    this.init = function () {
      $.get('data/entries.json').success( function (results) { 
        console.log(results); 
      });
    }

    this.doSomething = function() {
      console.log('mainContent:doSomething');
    }

    this.doSomethingElse = function() {
      console.log('mainContent:doSomethingElse');
    }

    /*
    * initialize the component
    */
    this.after('initialize', function() {
      this.init();
      this.on('click', this.doSomething);
      this.on('mouseover', this.doSomethingElse);
    });

  }

});