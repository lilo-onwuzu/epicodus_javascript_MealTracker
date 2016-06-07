import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  inputs: [ 'meal' ],
  // output newMeal EventEmitter for newMealProperties to parent root component directive
  outputs: [ 'newMealProperties' ],
  template: `
    <div *ngIf="selectedMeal" class="meal-form">
      <h3>Add A New Meal:</h3>
      <input placeholder="Name" class="input-sm" type="text" #newName>
      <input placeholder="Description" class="input-sm" type="text" #newDescription>
      <input placeholder="Calories" class="input-sm" type="number" #newCalories>
      <button class="btn btn-info" (click)="addMeal(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})

// in Angular, properties and methods are passed down from parent components to child components. Events are passed the opposite way. "properties down, actions up". Here we create an Event emitter to trigger a new meal addition to the root component class.
// newMeal property is of EventEmitter<Meal> type
export class NewMealComponent {
  public newMealProperties: EventEmitter< any[] >;

  // instantiate onSubmit with EventEmitter class
  constructor () {
    this.newMealProperties = new EventEmitter();
  }

  addMeal(newName: HTMLInputElement,
          newDescription: HTMLInputElement,
          newCalories: HTMLInputElement) {
    this.newMealProperties.emit([newName.value,
         newDescription.value,
         parseInt(newCalories.value)]);

    newName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
