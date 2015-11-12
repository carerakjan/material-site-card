(function(module){

    var contentAdapter = function(adapterFactory, contentModel) {
        return adapterFactory.init('database/content.json', contentModel);
    };

    module.factory('contentAdapter', ['adapterFactory', 'contentModel', contentAdapter]);

})(function(){
    try {
        return angular.module('business.dal');
    } catch(e) {
        return angular.module('business.dal', ['business.common','business.dto']);
    }
}());
