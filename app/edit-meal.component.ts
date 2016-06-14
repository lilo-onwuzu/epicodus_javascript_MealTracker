import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: [ 'meal' ],
  outputs: [ 'store' ],
  // input tag with [(ngModel)] directive as attribite where [(ngModel)] represents a two-way binding data path from component to EditMealComponent to its template and back from the template's input every Angular clock cycle to update its component. "placeholder" attribute is the input selection name that is displayed "#editName" is the label name attached to this input. This is the short hand form of the label-name/input-value pair  in html.
  // By (click)="editMeal()", an output event is triggered out from the button directive and into the <edit-meal> parent component to trigger its editMeal() method.
  template: `
    <div class="meal-form">
      <h3>Edit Meal:</h3>
      <input [(ngModel)]="meal.name" type="text" placeholder="Name" class="input-sm" #editName>
      <input [(ngModel)]="meal.description" type="text" placeholder="Description" class="input-sm" #editDescription>
      <input [(ngModel)]="meal.calories" type="number" (click)="storeCalories(meal)" placeholder="Calories" class="input-sm" #editCalories>
    </div>
  `
})

export class EditMealComponent {
  public store: EventEmitter<number>;
  public store_calories: number;

  constructor() {
    this.store = new EventEmitter();
  }

  storeCalories(meal: Meal): void {
    this.store_calories = meal.calories;
    this.store.emit(this.store_calories);
  }

}
