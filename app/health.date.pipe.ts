import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

// create pipename.pipe.ts
// the pipe and pipeTransform modules contain JS functions that can transform data or a collection of data e.g a date variable can be passed through a pipe to format it
// The list of meals displayed in <meal-list> will be passed through the health pipe filter to sort the list
@Pipe ({
  name: "health_date",
  pure: false
})

export class Health_Date_Pipe implements PipeTransform {

  // args which is declared as an array of "any" data type represents the conditions that will be used to filter the input "Meal[]"
  // transform is a method of the PipeTransform module "interface"

  transform( input: Meal[], args: any[] ) {

    var minCalories = args[0];
    var maxCalories = args[1];
    var mealDate = args[2];

    // (meal)=> {} is a short-hand form to define the function "function(meal) = {}"
    return input.filter((meal) => {
      if (mealDate) {
        return meal.calories >= minCalories && meal.calories <= maxCalories && meal.day === mealDate;
      } else {
        return meal.calories >= minCalories && meal.calories <= maxCalories;
      }
    })
  }
}
