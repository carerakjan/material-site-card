(function(module){

    var pageAdapter = function(adapterFactory, pageModel) {
        return adapterFactory.init('database/pages.json', pageModel);
    };

    module.factory('pageAdapter', ['adapterFactory', 'pageModel', pageAdapter]);

})(function(){
    try {
        return angular.module('business.dal');
    } catch(e) {
        return angular.module('business.dal', ['business.common','business.dto']);
    }
}());

