namespace unit3proj.Controllers {
    export class HomeController {
        public cars;
        constructor(private $http: ng.IHttpService) {
          this.$http.get(' /api/cars')
            .then((Response) => {
              this.cars = Response.data;
            })
            .catch((Response) => {
              console.error('Could not retrieve cars.');

            });
        }
    }
    export class AboutController {
        public message = 'Hello from the about page!';
    }
}
