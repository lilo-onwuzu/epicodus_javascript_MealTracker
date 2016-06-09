System.register(['angular2/core', './meal.component', './new-meal.component', './meal.model', './health.pipe'], function(exports_1, context_1) {
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
    var core_1, meal_component_1, new_meal_component_1, meal_model_1, health_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (health_pipe_1_1) {
                health_pipe_1 = health_pipe_1_1;
            }],
        execute: function() {
            // *ngFor directive is used an an attrubute of the div. It will duplicate create one div branch for every meal in mealList
            // (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the clicked Meal to be selected
            // [class.selected] is used to create and uncreate a class called "selected" for the clicked meal div so that a div has the selected class until another meal div is clicked
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterHealth = "healthy";
                }
                MealListComponent.prototype.construct = function () { };
                MealListComponent.prototype.selectMeal = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                };
                MealListComponent.prototype.addMeal = function (newMeal) {
                    this.mealList.push(new meal_model_1.Meal(newMeal[0], newMeal[1], newMeal[2]));
                };
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterHealth = filterOption;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent],
                        inputs: ['mealList'],
                        pipes: [health_pipe_1.HealthPipe],
                        template: "\n    <select (change)=\"onChange($event.target.value)\">\n      <option value=\"all\">All</option>\n      <option value=\"healthy\">Healthy Foods</option>\n      <option value=\"unhealthy\">Unhealthy Foods</option>\n      <option value=\"\">Date</option>\n    </select>\n\n    <div *ngFor=\"#meal of mealList | health:filterHealth\" (click)=\"selectMeal(meal)\" [class.selected]=\"meal === selectedMeal\" >\n      <meal-display [meal]=\"meal\" [selectedMeal]=\"selectedMeal\" ></meal-display>\n    </div>\n\n    <new-meal (newTrigger)=\"addMeal($event)\" ></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map