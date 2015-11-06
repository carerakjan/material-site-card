(function(module){
    var Content = function(json) {
        this.id = json.id;
        this.pageId = json.pageId;
        this.content = json.content;
    };

    Content.prototype.create = function(gallery, card) {
        return function(json) {
            return new Content(json).initContent(gallery, card);
        }
    };

    Content.prototype.initContent = function(gallery, card) {
        switch(this.content['type']) {
            case 'card': this.content = card.create(this.content); break;
            case 'gallery': this.content = gallery.create(this.content); break;
        }
        return this;
    };

    module.factory('contentModel', ['contentGalleryModel', 'contentCardModel', function(gallery, card) {
       return {
           create: Content.prototype.create(gallery, card)
       };
    }]);

})(function(){
    try {
        return angular.module('business.dto');
    } catch(e) {
        return angular.module('business.dto', []);
    }
}());