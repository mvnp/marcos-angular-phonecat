describe('phoneList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phoneList'));

    // Test the controller
    describe('controller', function(){

        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_){

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').respond([
                { name: 'Nexus S' },
                { name: 'MOTOROLA ATRIX 4G' }
            ]);

            ctrl = $componentController('phoneList');
        }));

        /*it('should create a `phones` model with 3 phones.', function(){
            expect(ctrl.phones.length).toBe(3);
        });*/

        it('should create a `phones` property with 2 phones fetched with `$http`.', function(){

            expect(ctrl.phones).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'MOTOROLA ATRIX 4G' }]);
        });

        it('should set a default value for the `orderProp` model.', function(){
            expect(ctrl.orderProp).toBe('age');
        });
    });
});