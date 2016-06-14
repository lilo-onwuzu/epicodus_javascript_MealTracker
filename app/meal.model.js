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
                    this.date = new Date().toJSON();
                    this.split1 = this.date.split("-");
                    this.split2 = this.split1[2].split("T");
                    this.day = this.split1[0] + "-" + this.split1[1] + "-" + this.split2[0];
                }
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.model.js.map