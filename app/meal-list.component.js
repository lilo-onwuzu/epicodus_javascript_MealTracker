System.register(['angular2/core', './meal.component', './new-meal.component', './meal.model', './health.date.pipe'], function(exports_1, context_1) {
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
    var core_1, meal_component_1, new_meal_component_1, meal_model_1, health_date_pipe_1;
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
            function (health_date_pipe_1_1) {
                health_date_pipe_1 = health_date_pipe_1_1;
            }],
        execute: function() {
            // *ngFor directive is used an an attrubute of the div. It will duplicate create one div branch for every meal in mealList
            // (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the clicked Meal to be selected
            // [class.selected] is used to create and uncreate a class called "selected" for the clicked meal div so that a div has the selected class until another meal div is clicked
            // ""#meal of mealList | health:filterHealth": this expression passes the selected option/condition "filterHealth" as args[0] of the health pipe. The "onDate($event.target.value)" method is called to pass "$event.target.value" or the "value" of the selected option to the component's property filterHealth
            // The only Meal object in the meal [] that will be passed onto the <meal-display> child component will be the ones filtered through the pipe
            //  health:filterHealth:filterDate: filterHealth represents args[0]="healthy" or "unhealthy" of conditions, filterDate represents args[1]="today" or "yesterday" of conditions
            MealListComponent = (function () {
                function MealListComponent() {
                    this.sliderMinValue = 0;
                    this.sliderMaxValue = 3000;
                    this.total_calories = 0;
                    this.collect = 0;
                }
                MealListComponent.prototype.construct = function () { };
                MealListComponent.prototype.selectMeal = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                };
                MealListComponent.prototype.addMeal = function (newMeal) {
                    this.mealList.push(new meal_model_1.Meal(newMeal[0], newMeal[1], newMeal[2]));
                };
                MealListComponent.prototype.collectCalories = function (calories) {
                    this.collect = calories;
                };
                MealListComponent.prototype.totalCalories_change = function (meal) {
                    this.total_calories = this.total_calories + meal.calories - this.collect;
                };
                MealListComponent.prototype.totalCalories_new = function (newMeal) {
                    this.total_calories += newMeal[2];
                };
                MealListComponent.prototype.collectDateFilter = function (filterOption) {
                    this.filterDate = filterOption;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent],
                        inputs: ['mealList'],
                        pipes: [health_date_pipe_1.Health_Date_Pipe],
                        template: "\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <section class=\"range-slider\">\n          <p>Filter Meals By Calories:</p>\n          <input type=\"range\" min=\"0\" max=\"3000\" step=\"50\" [(ngModel)] = \"sliderMinValue\"/>\n          <input type=\"range\" min=\"0\" max=\"3000\" step=\"50\" [(ngModel)] = \"sliderMaxValue\"/>\n          <span> {{ sliderMinValue }} - {{ sliderMaxValue }} </span>\n        </section>\n      </div>\n\n      <div class=\"col-md-6\">\n        <section class=\"date-selection\">\n          <p>Filter Meals By Date:</p>\n          <p><input type=\"date\" [(ngModel)] = \"filterDate\"/></p>\n          <span>{{ filterDate }}</span>\n        </section>\n      </div>\n    </div>\n\n    <div *ngFor=\"#meal of mealList | health_date:sliderMinValue:sliderMaxValue:filterDate\" (click)=\"selectMeal(meal)\" [class.selected]=\"meal === selectedMeal\" >\n      <meal-display [meal]=\"meal\" [selectedMeal]=\"selectedMeal\" (store2)=\"collectCalories($event)\" (change)=\"totalCalories_change(meal)\"></meal-display>\n    </div>\n\n    <new-meal (newTrigger)=\"addMeal($event)\" (newTrigger)=\"totalCalories_new($event)\"></new-meal><br>\n\n    <p>TotalCalories: {{ total_calories }}</p>\n  "
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