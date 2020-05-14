/////////////////////////////////////////////////////////////////////////////
// Define the `PhoneListController` controller on the `phonecatApp` module //
/////////////////////////////////////////////////////////////////////////////
angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http',
            function PhoneListController($http) {

                var self = this;
                self.orderProp = 'age';

                /*this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fust just got faster with Nexus S.',
                    age: 2
                },
                {
                    name: 'Motorola XOOM with Wi-Fi',
                    snippet: 'The Next, next generation tablets.',
                    age: 3
                },
                {
                    name: 'Samsung J7 Prime',
                    snippet: 'Perform and Beauty',
                    age: 1
                }
                ]

                this.orderProp = 'age';*/

                $http.get('phones/phones.json').then(function(response){
                    self.phones = response.data.slice(0, 12);
                });
            }
        ]
    });