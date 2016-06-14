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
            // {{ model }} "mustache tags" is used to call a one-way stream from a component to its template
            MealComponent = (function () {
                function MealComponent() {
                    // input property  ['meal'] passed down from parent-component <meal-list> has to be declared here as public meal:Meal before the input property can be used here. In this case, we do not need to use it so we do not declare it
                    // No output propeties to declare and then use
                    this.store2 = new core_1.EventEmitter();
                }
                MealComponent.prototype.construct = function () {
                    this.store2 = new core_1.EventEmitter();
                };
                MealComponent.prototype.storeAgain = function (event) {
                    this.collect = event;
                    this.store2.emit(this.collect);
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        directives: [edit_meal_component_1.EditMealComponent],
                        // these are the inputs and outputs of the meal-display component. They will also be called in the parent component <meal-list> where there is a <meal-display> tag. <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (edit)="editMeal($event)" ></meal-display>
                        // (edit) in the <meal-display> tag will output the 'edit' EventEmitter that will trigger the editMeal() method. The argument of the EventEmitter object ($event) OR [name.value, description.value, ...] is passed to the editMeal method.
                        // they will also be declared in MealComponent class declaration before they can be used in the class declaration
                        // parent component <meal-list> transfers its property "meal" to <meal-display> child component's input property [meal].
                        // child component <meal-display> outputs an event (editTrigger) to its parent <meal-list>
                        inputs: ['meal', 'selectedMeal'],
                        outputs: ['store2'],
                        template: "\n    <div>\n      <h3 class=\"cursor\" >{{ meal.name }}</h3>\n      <p *ngIf=\"meal === selectedMeal\" >{{ meal.description }}</p>\n      <p *ngIf=\"meal === selectedMeal\" >{{ meal.calories }}</p>\n      <small *ngIf=\"meal === selectedMeal\" >{{ meal.day }} {{ meal.time }}</small>\n    </div>\n    <edit-meal [meal]=\"meal\" *ngIf=\"meal === selectedMeal\" (store)=\"storeAgain($event)\" ></edit-meal>\n  "
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