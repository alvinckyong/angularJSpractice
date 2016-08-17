(function () {

    angular
        .module('app')
        .controller('MainController', MainController);

    //This is useful for debugging purposes
    function MainController(){
        this.myObject = {
            one: 'Option 1',
            two: 'Option 2'
        };

        this.myArray = ['my', 'Angular', 'app'];

    }
})();