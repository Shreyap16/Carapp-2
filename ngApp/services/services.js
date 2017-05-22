var unit3proj;
(function (unit3proj) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.CarResource = $resource('/api/cars');
            }
            CarService.prototype.listCars = function () {
                return this.CarResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('unit3proj').service('carService', CarService);
    })(Services = unit3proj.Services || (unit3proj.Services = {}));
})(unit3proj || (unit3proj = {}));
