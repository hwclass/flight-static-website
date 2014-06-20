define(function (require) {
  
  var defineComponent = require('flight/lib/component');

  // define the component
  return defineComponent(navigation);

  function navigation() {

    this.doSomething = function() {
      console.log('doSomething');
    }

    this.doSomethingElse = function() {
      console.log('doSomething');
    }

    // now initialize the component
    this.after('initialize', function() {
      this.on('click', this.doSomething);
      this.on('mouseover', this.doSomethingElse);
    });
  }

});