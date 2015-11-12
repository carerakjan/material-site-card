(function(module){
    var Content = function(json) {
        this.id = json.id;
        this.authorId = json.authorId;
        this.pageId = json.pageId;
        this.caption = json.caption;
        this.description = json.description;
    };

    module.factory('contentModel', function(modelFactory) {
        return modelFactory.createModel(Content);
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', ['business.common']);
    }
}());