define(function (require) {

	var defineComponent = require('flight/lib/component');

	/*
	* define the component
	*/
	return defineComponent(footer);

	function footer () {

		this.doSomething = function () {
			console.log('footer:doSomething');
		}

		this.doSomethingElse = function () {
			console.log('footer:doSomethingElse');
		}

		/*
		* initialize the component
		*/
		this.after('initialize', function () {
			this.on('click', this.doSomething);
			this.on('mouseover', this.doSomethingElse);
		});

	}

});