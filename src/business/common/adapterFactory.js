(function(module) {

    var initModel = function(Model) {
        return function(data) {
            return Model.create(data);
        }
    };

    var adapterFactory = function($http) {
        return {
            init: function(source, Model){
                return {
                    fetch: function() {
                        return $http.get(source).then(function(json){
                            return _.map(json.data, initModel(Model));
                        });
                    }
                }
            }
        };
    };

    module.factory('adapterFactory', adapterFactory);

})(function(){
    try {
        return angular.module('business.common');
    } catch(e) {
        return angular.module('business.common', ['ng']);
    }
}());
