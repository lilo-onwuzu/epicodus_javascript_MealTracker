import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: [ 'meal' ],
  template: `
    <div class="meal-form">
      <h3>Edit Meal:</h3>
      <input [(ngModel)]="meal.name" placeholder="Name" class="input-sm" #newName>
      <input [(ngModel)]="meal.description" placeholder="Description" class="input-sm" #newDescription>
      <input [(ngModel)]="meal.calories" placeholder="Calories" class="input-sm" #newCalories>
      <button class="btn btn-info" (click)="editMeal(newMeal)">Edit</button>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
