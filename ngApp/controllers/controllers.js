var unit3proj;
(function (unit3proj) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get(' /api/cars')
                    .then(function (Response) {
                    _this.cars = Response.data;
                })
                    .catch(function (Response) {
                    console.error('Could not retrieve cars.');
                });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = unit3proj.Controllers || (unit3proj.Controllers = {}));
})(unit3proj || (unit3proj = {}));
