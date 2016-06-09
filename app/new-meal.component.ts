import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  // output 'new' event to parent root component directive
  outputs: [ 'newTrigger' ],
  template: `
    <div class="meal-form">
      <h3>Add A New Meal:</h3>
      <input placeholder="Name" class="input-sm" type="text" #newName>
      <input placeholder="Description" class="input-sm" type="text" #newDescription>
      <input placeholder="Calories" class="input-sm" type="number" #newCalories>
      <button class="btn btn-info" (click)="addMeal(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})

// in Angular, properties can be passed down from parent components to child components. Events can be passed the opposite way. "properties down, actions up". Here we create an Event emitter to trigger a new meal addition to the root component class.
// We "declare" NewMealComponent's property 'new' as a data object of the EventEmitter<> type that can hold any type of data object
export class NewMealComponent {
  // newTrigger is a new EventEmitter that will send an event trigger to the parent component (meal-list). Remember the master list that we need to update lives in the root component
  // newTrigger is of EventEmitter type that emits an array (any[]) of any data object type (string, number etc.)
  public newTrigger: EventEmitter<any[]>;

  constructor () {
    // We "instance" NewMealComponent's property 'new' as an object of the EventEmitter class
    this.newTrigger = new EventEmitter();
  }

  // addMeal(args) method of NewMealComponent class will cause its property this.new to emit the values in the labels in args
  addMeal(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement): void {
    this.newTrigger.emit([name.value, description.value, parseInt(calories.value)]);

    name.value = "";
    description.value = "";
    calories.value = "";
  }

}
