(function(module){

    var initModel = function(model) {
        return function(data) {
            return model.create(data);
        }
    };

    var contentAdapter = function($http, contentModel) {
        return {
            fetch: function() {
                return $http.get('database/content.json').then(function(json){
                    return _.map(json.data, initModel(contentModel));
                });
            }
        };
    };

    module.factory('contentAdapter', ['$http','contentModel', contentAdapter]);

})(function(){
    try {
        return angular.module('business.dal');
    } catch(e) {
        return angular.module('business.dal', ['ng','business.dto']);
    }
}());
