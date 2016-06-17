import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  // output 'newTrigger' event to parent component directive
  outputs: [ 'newTrigger' ],
  template: `
    <div class="meal-form">
      <h3>Add A New Meal:</h3>

      <input placeholder="Name" class="input-sm" type="text" #newName>
      <input placeholder="Description" class="input-sm" type="text" #newDescription>
      <span> 0 <input [(ngModel)]="calorie_value" placeholder="Calories" class="input-sm-calories" type="range" min="0" max="3000" step="50" #newCalories> 3000 Calories | {{ calorie_value }}</span><br>

      <button class="btn btn-info" (click)="addMeal(newName, newDescription, newCalories)">Add</button>

    </div>
  `
})

export class NewMealComponent {

  // in Angular, properties can be passed down from parent components to child components. Events can be passed the opposite way. "properties down, actions up". Here we create an Event emitter to trigger a new meal addition to the parent component class.
  // We "declare" NewMealComponent's output property 'new-trigger' as an object of the EventEmitter<> class or data type that can hold an array of "any" type of data object
  // newTrigger is an EventEmitter that will send an event trigger to the parent component (meal-list). Remember the master list that we need to update lives in the root component
  public newTrigger: EventEmitter<any[]> = new EventEmitter();
  public calorie_value: number = 1500;

  // no required arguments to instantiate this class
  constructor () {}

  // addMeal(args) method of NewMealComponent class will cause its output property "newTrigger" to emit the added values in the labels to the parent
  addMeal(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement): void {

    this.newTrigger.emit([name.value, description.value, parseInt(calories.value)]);

    // empty the values afterwards
    name.value = "";
    description.value = "";
    calories.value = "";
  }

}
