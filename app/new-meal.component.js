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
                function NewMealComponent() {
                    // We "instance" NewMealComponent's property 'new' as an object of the EventEmitter class
                    this.newTrigger = new core_1.EventEmitter();
                }
                // addMeal(args) method of NewMealComponent class will cause its property this.new to emit the values in the labels in args
                NewMealComponent.prototype.addMeal = function (name, description, calories) {
                    this.newTrigger.emit([name.value, description.value, parseInt(calories.value)]);
                    name.value = "";
                    description.value = "";
                    calories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        // output 'new' event to parent root component directive
                        outputs: ['newTrigger'],
                        template: "\n    <div class=\"meal-form\">\n      <h3>Add A New Meal:</h3>\n      <input placeholder=\"Name\" class=\"input-sm\" type=\"text\" #newName>\n      <input placeholder=\"Description\" class=\"input-sm\" type=\"text\" #newDescription>\n      <input placeholder=\"Calories\" class=\"input-sm\" type=\"number\" #newCalories>\n      <button class=\"btn btn-info\" (click)=\"addMeal(newName, newDescription, newCalories)\">Add</button>\n    </div>\n  "
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