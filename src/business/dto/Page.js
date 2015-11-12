(function(module){
    var Page = function(json) {
        this.id = json.id;
        this.authorId = json.authorId;
        this.title = json.title;
        this.subTitle = json.subTitle;
        this.hashTag = json.hashTag;
    };

    module.factory('pageModel', function(modelFactory) {
        return modelFactory.createModel(Page);
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', ['business.common']);
    }
}());