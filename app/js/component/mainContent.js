define(function (require) {

  var defineComponent = require('flight/lib/component');

  /*
  * define the component
  */
  return defineComponent(mainContent);

  function mainContent() {

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
      this.on('click', this.doSomething);
      this.on('mouseover', this.doSomethingElse);
    });
  }

});