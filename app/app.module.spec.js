// Test if model have
describe('PhoneListController', function(){

    beforeEach(module('phoncatApp'));

    if('Should create a `phones` model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', {scope: $scope});

        expect(scope.phones.length).toBe(3);
        expect(scope.name).toBe('World');
    }));
});