(function(module){

    var initAuthorModel = function(authorModel) {
        return function(data) {
            return authorModel.create(data);
        }
    };

    var authorAdapter = function($http, authorModel) {
        return {
            fetch: function() {
                return $http.get('database/author.json').then(function(json){
                    return _.map(json.data, initAuthorModel(authorModel));
                });
            }
        };
    };

    module.factory('authorAdapter', ['$http','authorModel', authorAdapter]);

})(function(){
    try {
        return angular.module('business.dal');
    } catch(e) {
        return angular.module('business.dal', ['ng','business.dto']);
    }
}());
