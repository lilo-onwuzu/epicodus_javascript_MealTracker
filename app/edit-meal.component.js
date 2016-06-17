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
    var EditMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditMealComponent = (function () {
                // these are the properties "required" to instantiate this class. In this case, no argument is required to instantiate this class
                function EditMealComponent() {
                    // these are the attributes/properties of this class
                    this.store = new core_1.EventEmitter();
                }
                // storeCalories(meal) method outputs event trigger (store) with initial value of meal-calories enclosed to its parent(s) on click
                EditMealComponent.prototype.storeCalories = function (meal) {
                    this.store_calories = meal.calories;
                    this.store.emit(this.store_calories);
                };
                EditMealComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-meal',
                        // input property "meal" from parent <meal-display>
                        inputs: ['meal'],
                        outputs: ['store'],
                        // input tag with [(ngModel)] directive as attribite where [(ngModel)] represents a two-way binding data path from component to EditMealComponent to its template and back from the template's input every Angular clock cycle to update its component. "placeholder" attribute is the input selection name that is displayed "#editName" is the label name attached to this input. This is the short hand form of the label-name/input-value pair in html.
                        // By (click)="editMeal()", an output event is triggered out from the button directive and into the <edit-meal> parent component to trigger its editMeal() method.
                        template: "\n    <div class=\"meal-form\">\n      <h3>Edit Meal:</h3>\n\n      <input [(ngModel)]=\"meal.name\" type=\"text\" placeholder=\"Name\" class=\"input-sm\" #editName>\n      <input [(ngModel)]=\"meal.description\" type=\"text\" placeholder=\"Description\" class=\"input-sm\" #editDescription>\n      <span> 0 <input [(ngModel)]=\"meal.calories\" placeholder=\"Calories\" class=\"input-sm-calories\" type=\"range\" min=\"0\" max=\"3000\" step=\"50\" (click)=\"storeCalories(meal)\" #editCalories> 3000 Calories </span><br>\n\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditMealComponent);
                return EditMealComponent;
            }());
            exports_1("EditMealComponent", EditMealComponent);
        }
    }
});
//# sourceMappingURL=edit-meal.component.js.map