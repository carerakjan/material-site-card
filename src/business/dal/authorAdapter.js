(function(module){

    var authorAdapter = function(adapterFactory, authorModel) {
        return adapterFactory.init('database/author.json', authorModel);
    };

    module.factory('authorAdapter', ['adapterFactory', 'authorModel', authorAdapter]);

})(function(){
    try {
        return angular.module('business.dal');
    } catch(e) {
        return angular.module('business.dal', ['business.common','business.dto']);
    }
}());
