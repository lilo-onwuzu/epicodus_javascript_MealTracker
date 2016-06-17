System.register(['angular2/core', './meal-list.component'], function(exports_1, context_1) {
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
    var core_1, meal_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            }],
        execute: function() {
            // AppComponent class is instanced with the selector tag <myapp>[template]</myapp>. Therefore within [template] we can use any of its properties and methods directly.
            // <meal-list [mealList]="meals" ></meal-list> The meals property of AppComponent is transferred this way to the child-component MealListComponent. By calling [mealList], the input property variable mealList is created here for the MealListComponent and it will be used in the MealListComponent template.
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [];
                }
                // displayTotal will pass the value enclosed in the EventEmitter "totalTrigger" to the property total_calories to be displayed
                AppComponent.prototype.displayTotal = function (calories) {
                    this.total_calories = calories;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n    <div class=\"jumbotron\">\n      <span class=\"total\">TotalCalories: {{ total_calories }} </span>\n    </div>\n\n    <h4>Meal Tracker</h4>\n\n    <div class=\"container\">\n      <meal-list [mealList]=\"meals\" (totalTrigger)= \"displayTotal($event)\"></meal-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map