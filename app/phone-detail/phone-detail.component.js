////////////////////////////////////////////////////////////////////////////////
// Define the `PhoneDetailController` controller on the `phonecatApp` module ///
////////////////////////////////////////////////////////////////////////////////
angular.
    module('phoneDetail').
    component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', 'Phone',
            function PhoneDetailController($routeParams, Phone) {

                var self = this;

                self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone){
                    self.setImage(phone.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                }

                self.onDblclick = function onDblclick(imageUrl) {
                    alert('You double-clicked image: ' + imageUrl);
                }
            }
        ]
    });