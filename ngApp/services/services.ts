namespace unit3proj.Services {
    export class CarService {
        private CarResource;
        public listCars() {
            return this.CarResource.query();
        }
        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars');
        }
    }
    angular.module('unit3proj').service('carService', CarService);
    }
