(function(module){
    var ContentGalleryType = function(content) {
        this.type = content.type;
        this.value = content.value;
    };

    ContentGalleryType.prototype.create = function(content) {
        return new ContentGalleryType(content);
    };

    ContentGalleryType.prototype.initCollection = function(gallery) {
        this.collection = _.findWhere(gallery, {id: this.value['collectionId']});
    };

    ContentGalleryType.prototype.getImage = function() {
        return _.findWhere(this.collection, {id: this.value['bgImage']});
    };

    module.factory('contentGalleryModel', function() {
        return {
            create: ContentGalleryType.prototype.create
        };
    });

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());
