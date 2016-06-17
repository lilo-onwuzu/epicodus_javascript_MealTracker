// json data file are the standard package for moving data between systems
// tsconfig.json is a json file that is used to configure the typescript compiler
// typings.json holds typescript definition files that teach the compiler about typescript syntax and new features
import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

// AppComponent class is instanced with the selector tag <myapp>[template]</myapp>. Therefore within [template] we can use any of its properties and methods directly.
// <meal-list [mealList]="meals" ></meal-list> The meals property of AppComponent is transferred this way to the child-component MealListComponent. By calling [mealList], the input property variable mealList is created here for the MealListComponent and it will be used in the MealListComponent template.

@Component({
  selector: 'my-app',
  directives: [ MealListComponent ],
  template: `
    <div class="jumbotron">
      <span class="total">TotalCalories: {{ total_calories }} </span>
    </div>

    <h4>Meal Tracker</h4>

    <div class="container">
      <meal-list [mealList]="meals" (totalTrigger)= "displayTotal($event)"></meal-list>
    </div>
  `
})

// appComponent will store all the models and we will data bind them to the children so they can only be edited only from here
export class AppComponent {
  public meals: Meal[] = [];
  public total_calories: number;

  constructor() {}

  // displayTotal will pass the value enclosed in the EventEmitter "totalTrigger" to the property total_calories to be displayed
  displayTotal(calories: number) : void {
    this.total_calories = calories;
  }

}
