(function(module) {

    var modelFactory = function() {
        return {
            createModel: function(Constructor) {
                return {
                    create: function(C) {
                        return function(json) {
                            return new C(json);
                        }
                    }(Constructor)
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
