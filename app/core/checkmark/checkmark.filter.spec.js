describe('checkmark', function(){

    beforeEach(module('core'));

    it('message.', inject(
        function(checkmarkFIlter) {

            expect(checkmarkFIlter(true)).toBe('\u2713');
            expect(checkmarkFIlter(false)).toBe('\u2718');
        }
    ));
});