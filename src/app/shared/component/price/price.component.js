"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PriceComponent = void 0;
var core_1 = require("@angular/core");
var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-price',
            templateUrl: './price.component.html',
            styleUrls: ['./price.component.scss']
        })
    ], PriceComponent);
    return PriceComponent;
}());
exports.PriceComponent = PriceComponent;
var Car = /** @class */ (function () {
    function Car(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    Car.prototype.year = function () {
        console.log(this.brand);
        console.log(this.brand);
    };
    return Car;
}());
