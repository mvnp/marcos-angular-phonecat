'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

    beforeEach(function() {
        browser.get('index.html');
    });

    it('should filter the phone list as a user types into the search box.', function(){

        var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
        var query = element(by.model('$ctrl.query'));

        expect(phoneList.count()).toBe(3);

        query.sendKeys('nexus');
        expect(phoneList.count()).toBe(1);

        query.clear();

        query.sendKeys('motorola')
        expect(phoneList.count()).toBe(2);
    });

    it('should be possible to control phone order via the drop-down menu.', function(){

        var queryField = element(by.model($ctrl.quert));
        var orderSelect = element(by.model($ctrl.orderProp));
        var nameOption = orderSelect.element(by.css('option[value="name"]'));
        var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

        function getNames(){

            return phoneNameColumn.map(function(elem){
                return elem.getText();
            });
        }

        // Let's narrow the dataset to make the assertions shorter
        queryField.sendKeys('tablet');

        expect(getNames()).toEqual([

            'Motorola XOOM with Wi-Fi',
            'Motorola XOOM'
        ]);

        nameOption.click();

        expect(getNames()).toEqual([

            'Motorola XOOM with Wi-Fi',
            'Motorola XOOM'
        ]);

    });

    it('should render phone specific links.', function(){

        var query = element(by.model('$ctrl.query'));
        query.sendKeys('nexus');

        element.all(by.css('.phones li a')).first.click();
        expect(browser.getCurrentUrl()).toContain('index.html!#/phones/nexus-s');
    });
});