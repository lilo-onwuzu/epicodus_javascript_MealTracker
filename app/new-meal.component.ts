import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  inputs: [ 'meal' ],
  template: `
    <div *ngIf="selectedMeal" class="meal-form">
      <h3>Add A New Meal:</h3>
      <input placeholder="Name" class="input-sm" #newName>
      <input placeholder="Description" class="input-sm" #newDescription>
      <input placeholder="Calories" class="input-sm" #newCalories>
      <button class="btn btn-info" (click)="addMeal(newMeal)">Add</button>
    </div>
  `
})

export class NewMealComponent {

}
