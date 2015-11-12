(function(module){

    var Author = function(json) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.avatar = json.avatar;
        this.address = json.address;
        this.email = json.email;
        this.phone = json.phone;
    };

    Author.prototype.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    module.factory('authorModel', function(modelFactory) {
       return modelFactory.createModel(Author);
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', ['business.common']);
    }
}());