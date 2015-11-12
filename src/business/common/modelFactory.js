(function(module) {

    var modelFactory = function() {
        return {
            createModel: function(Constructor) {
                return {
                    create: function(json) {
                        return new Constructor(json);
                    }
                };
            }
        }
    };

    module.factory('modelFactory', modelFactory);

})(function(){
    try {
        return angular.module('business.common');
    } catch(e) {
        return angular.module('business.common', []);
    }
}());
