var app = angular.module('siteCard', ['ng', 'business']);

app.run(['businessFacade', function(businessFacade) {
    businessFacade.fetchAllData().then(function(data) {
        console.log(data);
    })
}]);