(function () {

    angular
        .module('app')
        .controller('SpacesController', SpacesController);
    
    function SpacesController() {

        this.spacesList = [{
            name: 'Trehaus',
            imdb: 'tt0111161',
            img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            ranking: 3,
            featured: true,
            spaceType: 'office'
        }, {
            name: 'Marriott',
            imdb: 'tt1375666',
            img: 'M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
            ranking: 4,
            spaceType: 'event'
        }, {
            name: 'Plaza Sentral',
            imdb: 'tt0133093',
            img: 'M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            ranking: 1,
            featured: true,
            spaceType: 'retail'
        }, {
            name: 'Block 79',
            imdb: 'tt0120815',
            img: 'M/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@._V1_UY268_CR7,0,182,268_AL_.jpg',
            ranking: 2
        }];

        this.newName = '';
        this.newSpaceType = '';
        this.onFocus = function (){
            console.log('Focus!');
        };
        //Once a user moves to the new field, you can style the field accordingly
        this.onBlur = function (){
            console.log('Blur!');
        };
        //You can use onChange to check autocomplete function
        this.onChange = function (){
            console.log('Change!', this.newName);
        };
        this.addSpace = function (){
          this.spacesList.push({
              name: this.newName,
              spaceType: this.spaceType
          });
            console.log(this.newName, this.spaceType)
        };

        this.favouritesList = [];

        this.addToFavourites = function (space){
            this.favouritesList.push(space);
            console.info(space)
        };

        this.unfavourite = function (index){
            this.favouritesList.splice(index,1);
            console.log("Removed Index No: " + index)
        };
    }

})();    

