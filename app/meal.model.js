System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Meal;
    return {
        setters:[],
        execute: function() {
            Meal = (function () {
                function Meal(name, description, calories) {
                    this.name = name;
                    this.description = description;
                    this.calories = calories;
                }
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.model.js.map