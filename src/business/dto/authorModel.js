(function(module){
    var Author = function(json) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.avatar = json.avatar;
        this.contacts = json.contacts;
    };

    Author.prototype.init = function(json) {
        return new Author(json);
    };

    Author.prototype.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    module.factory('authorModel', function() {
       return {
           init: Author.prototype.init
       };
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());