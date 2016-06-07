System.register(['angular2/core', './new-meal.component', './edit-meal.component'], function(exports_1, context_1) {
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
    var core_1, new_meal_component_1, edit_meal_component_1;
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (edit_meal_component_1_1) {
                edit_meal_component_1 = edit_meal_component_1_1;
            }],
        execute: function() {
            // {{ model }} "mustache tags" is used to call a one-way stream from a component to its template
            MealComponent = (function () {
                function MealComponent() {
                }
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        directives: [new_meal_component_1.NewMealComponent, edit_meal_component_1.EditMealComponent],
                        inputs: ['meal', 'selectedMeal'],
                        template: "\n    <div>\n      <h3 class=\"cursor\" >{{ meal.name }}</h3>\n      <p *ngIf=\"meal === selectedMeal\" >{{ meal.description }}</p>\n    </div>\n    <new-meal [meal]=\"meal\" *ngIf=\"meal === selectedMeal\" ></new-meal>\n    <edit-meal [meal]=\"meal\" *ngIf=\"meal === selectedMeal\" ></edit-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    }
});
//# sourceMappingURL=meal.component.js.map