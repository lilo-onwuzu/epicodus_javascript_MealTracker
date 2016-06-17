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
            // *ngFor directive is used as an attrubute of the div. It will duplicate/create one div branch for every meal in mealList
            // (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the "meal" to become the property "selectedMeal"
            // [class.selected] is used to create and uncreate a class (floating class) called "selected" for the div of selectedMeal meal so that a div has the selected class temporarily until another meal div is clicked
            // "#meal of mealList | health:filterHealth" : this expression passes the condition (string or number) "filterHealth" to args[0] of the health_date pipe
            // The only meal objects in the Meal[] that will be passed onto the <meal-display> child component will be the ones filtered through the pipe
            // health_date:sliderMinValue:sliderMaxValue:filterDate : sliderMinValue is passed to the health_date pipe as args[0]="minCalories", sliderMaxValue is passed to the pipe as args[1]="maxCalories"...
            MealListComponent = (function () {
                function MealListComponent() {
                    this.sliderMinValue = 0;
                    this.sliderMaxValue = 3000;
                    this.total_calories = 0;
                    this.initialCalories = 0;
                    this.totalTrigger = new core_1.EventEmitter();
                }
                // no required arguments to instantiate this class
                MealListComponent.prototype.construct = function () {
                    this.totalTrigger = new core_1.EventEmitter();
                };
                MealListComponent.prototype.selectMeal = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                };
                MealListComponent.prototype.addMeal = function (newMeal) {
                    this.mealList.push(new meal_model_1.Meal(newMeal[0], newMeal[1], newMeal[2]));
                };
                MealListComponent.prototype.collectDateFilter = function (filterOption) {
                    this.filterDate = filterOption;
                };
                MealListComponent.prototype.sendTotalCalories = function () {
                    this.totalTrigger.emit(this.total_calories);
                };
                MealListComponent.prototype.storeInitialCalories = function (calories) {
                    this.initialCalories = calories;
                };
                // whenever the meal.calories slider in edit-meal is clicked, a "store" event is triggered from <edit-meal> to <meal-display> and then to <meal-list> that stores meal.calories at time of click. Then "only if the value of meal.calories changes", will the value of initialCalories be used to calculate total_calories thereby making the edit-meal component responsive to total_calories
                MealListComponent.prototype.totalCalories_change = function (meal) {
                    this.total_calories = this.total_calories + meal.calories - this.initialCalories;
                };
                MealListComponent.prototype.totalCalories_new = function (newMeal) {
                    this.total_calories += newMeal[2];
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent],
                        inputs: ['mealList'],
                        outputs: ['totalTrigger'],
                        pipes: [health_date_pipe_1.Health_Date_Pipe],
                        template: "\n    <div class=\"row\">\n\n      <div class=\"col-sm-6\">\n        <section class=\"range-slider\">\n          <p>Filter Meals By Calories:</p>\n          <input type=\"range\" min=\"0\" max=\"3000\" step=\"50\" [(ngModel)] = \"sliderMinValue\"/>\n          <input type=\"range\" min=\"0\" max=\"3000\" step=\"50\" [(ngModel)] = \"sliderMaxValue\"/>\n          <span> {{ sliderMinValue }} - {{ sliderMaxValue }} </span>\n        </section>\n      </div>\n\n      <div class=\"col-md-6\">\n        <section class=\"date-selection\">\n          <p>Filter Meals By Date:</p>\n          <p><input type=\"date\" [(ngModel)] = \"filterDate\" class=\"input-sm\"/></p>\n          <span>{{ filterDate }}</span>\n        </section>\n      </div>\n    </div>\n\n    <div *ngFor=\"#meal of mealList | health_date:sliderMinValue:sliderMaxValue:filterDate\" (click)=\"selectMeal(meal)\" [class.selected]=\"meal === selectedMeal\" >\n      <meal-display [meal]=\"meal\" [selectedMeal]=\"selectedMeal\" (store2)=\"storeInitialCalories($event)\" (change)=\"totalCalories_change(meal)\"></meal-display>\n    </div><br><br>\n\n    <new-meal (newTrigger)=\"addMeal($event)\" (newTrigger)=\"totalCalories_new($event)\" (newTrigger)=\"sendTotalCalories()\"></new-meal><br>\n\n\n\n  "
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