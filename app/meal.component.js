System.register(['angular2/core', './edit-meal.component'], function(exports_1, context_1) {
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
    var core_1, edit_meal_component_1;
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_meal_component_1_1) {
                edit_meal_component_1 = edit_meal_component_1_1;
            }],
        execute: function() {
            // {{ model }} "mustache tags" is used to call a one-way data stream from a component's model to its template
            MealComponent = (function () {
                function MealComponent() {
                    // input property  ['meal'] passed down from parent-component <meal-list> has to be declared here as public meal:Meal before the input property can be used here. In this case, we do not need to use it so we do not declare it
                    // No output propeties to declare and then use
                    this.store2 = new core_1.EventEmitter();
                    this.change2 = new core_1.EventEmitter();
                }
                MealComponent.prototype.construct = function () { };
                MealComponent.prototype.storeAgain = function (initialCalories) {
                    this.store2.emit(initialCalories);
                };
                MealComponent.prototype.changeAgain = function (calories) {
                    this.change2.emit(calories);
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        // list all children components separated by commas
                        directives: [edit_meal_component_1.EditMealComponent],
                        // these are the inputs and outputs of the meal-display component. They will also be called in the parent component <meal-list> where there is a <meal-display> tag. <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (store2)="collectCalories($event)" ></meal-display>
                        // inputs and outputs need to be declared in MealComponent class declaration before they can be used there to create methods etc.
                        // parent component <meal-list> transfers its property "meal" to <meal-display> child component's input property [meal].
                        inputs: ['meal', 'selectedMeal'],
                        // "store" output property from <edit-meal> is used to trigger the storeAgain(<value held in "store" EventEmitter>) method which send another event trigger "store2" to the parent of <meal-display>, <meal-list>
                        outputs: ['store2', 'change2'],
                        template: "\n    <div>\n      <h3 class=\"cursor\" >{{ meal.name }}</h3>\n\n      <div class=\"details\">\n        <p *ngIf=\"meal === selectedMeal\" >{{ meal.description }}</p>\n        <p *ngIf=\"meal === selectedMeal\" >{{ meal.calories }}</p>\n        <small *ngIf=\"meal === selectedMeal\" >{{ meal.day }} {{ meal.time }}</small>\n      </div>\n\n    </div>\n\n    <edit-meal *ngIf=\"meal === selectedMeal\" [meal]=\"meal\" (store)=\"storeAgain($event)\" (changeTrigger)=\"changeAgain($event)\"></edit-meal>\n  "
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