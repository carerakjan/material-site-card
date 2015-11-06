(function(module){
    var Author = function(json) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.avatar = json.avatar;
        this.contacts = json.contacts;
    };

    Author.prototype.create = function(json) {
        return new Author(json);
    };

    Author.prototype.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    module.factory('authorModel', function() {
       return {
           create: Author.prototype.create
       };
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());