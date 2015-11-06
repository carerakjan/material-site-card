(function(module){
    var Page = function(json) {
        this.id = json.id;
        this.title = json.title;
        this.hashTag = json.hashTag;
    };

    Page.prototype.create = function(json) {
        return new Page(json);
    };

    module.factory('pageModel', function() {
       return {
           create: Page.prototype.create
       };
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());