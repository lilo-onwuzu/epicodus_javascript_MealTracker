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
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                // no required arguments to instantiate this class
                function NewMealComponent() {
                    // in Angular, properties can be passed down from parent components to child components. Events can be passed the opposite way. "properties down, actions up". Here we create an Event emitter to trigger a new meal addition to the parent component class.
                    // We "declare" NewMealComponent's output property 'new-trigger' as an object of the EventEmitter<> class or data type that can hold an array of "any" type of data object
                    // newTrigger is an EventEmitter that will send an event trigger to the parent component (meal-list). Remember the master list that we need to update lives in the root component
                    this.newTrigger = new core_1.EventEmitter();
                    this.calorie_value = 1500;
                }
                // addMeal(args) method of NewMealComponent class will cause its output property "newTrigger" to emit the added values in the labels to the parent
                NewMealComponent.prototype.addMeal = function (name, description, calories) {
                    this.newTrigger.emit([name.value, description.value, parseInt(calories.value)]);
                    // empty the values afterwards
                    name.value = "";
                    description.value = "";
                    calories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        // output 'newTrigger' event to parent component directive
                        outputs: ['newTrigger'],
                        template: "\n    <div class=\"meal-form\">\n      <h3>Add A New Meal:</h3>\n\n      <input placeholder=\"Name\" class=\"input-sm\" type=\"text\" #newName>\n      <input placeholder=\"Description\" class=\"input-sm\" type=\"text\" #newDescription>\n      <span> 0 <input [(ngModel)]=\"calorie_value\" placeholder=\"Calories\" class=\"input-sm-calories\" type=\"range\" min=\"0\" max=\"3000\" step=\"50\" #newCalories> 3000 Calories | {{ calorie_value }}</span><br>\n\n      <button class=\"btn btn-info\" (click)=\"addMeal(newName, newDescription, newCalories)\">Add</button>\n\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map