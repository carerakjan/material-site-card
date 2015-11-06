(function(module){
    var ContentCardType = function(content) {
        this.type = content.type;
        this.value = content.value;
    };

    ContentCardType.prototype.create = function(content) {
        return new ContentCardType(content);
    };

    ContentCardType.prototype.initCollection = function(gallery) {
        this.collection = _.findWhere(gallery, {id: this.value['headerImage']['collectionId']});
    }

    ContentCardType.prototype.getImage = function() {
        return _.findWhere(this.collection, {id: this.value['headerImage']['imageId']});
    };

    module.factory('contentCardModel', function() {
        return {
            create: ContentCardType.prototype.create
        };
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());