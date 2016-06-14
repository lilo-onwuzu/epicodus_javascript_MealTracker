System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Health_Date_Pipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // create pipename.pipe.ts
            // the pipe and pipeTransform modules contain JS functions that can transform data or a collection of data e.g a date variable can be passed through a pipe to format it
            // The list of meals displayed in <meal-list> will be passed through the health pipe filter to sort the list
            Health_Date_Pipe = (function () {
                function Health_Date_Pipe() {
                }
                // args which is declared as an array of "any" data type represents the conditions that will be used to filter the input Meal[] array
                Health_Date_Pipe.prototype.transform = function (input, args) {
                    var minCalories = args[0];
                    var maxCalories = args[1];
                    var mealDate = args[2];
                    return input.filter(function (meal) {
                        return meal.calories >= minCalories && meal.calories <= maxCalories && meal.day === mealDate;
                    });
                };
                Health_Date_Pipe = __decorate([
                    core_1.Pipe({
                        name: "health_date",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], Health_Date_Pipe);
                return Health_Date_Pipe;
            }());
            exports_1("Health_Date_Pipe", Health_Date_Pipe);
        }
    }
});
//# sourceMappingURL=health.date.pipe.js.map