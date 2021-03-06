(function(module){

    var dataTypes = ['authors', 'contents', 'pages'];
    var cache = null;

    var businessFacade = function($q, authorAdapter, contentAdapter, pageAdapter) {
        return {
            fetchAllData: function(refetch) {
                if(!refetch && cache && cache.length) {
                    return $q.when(cache);
                }
                return $q.all([
                    authorAdapter.fetch(),
                    contentAdapter.fetch(),
                    pageAdapter.fetch()
                ]).then(function(results) {
                    cache = _.map(dataTypes, function(dt, index) {
                        return {
                            contentType: dt,
                            data: results[index]
                        };
                    });
                    return cache;
                })
            }
        };
    };

    module.factory('businessFacade', businessFacade);

})(function(){
    try {
        return angular.module('business');
    } catch(e) {
        return angular.module('business', ['business.dal']);
    }
}());
