// import Component and EventEmitter modules from angular2/core module
// import Meal class definition module
import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  // input property "meal" from parent <meal-display>
  inputs: [ 'meal' ],
  outputs: [ 'store' ],
  // input tag with [(ngModel)] directive as attribite where [(ngModel)] represents a two-way binding data path from component to EditMealComponent to its template and back from the template's input every Angular clock cycle to update its component. "placeholder" attribute is the input selection name that is displayed "#editName" is the label name attached to this input. This is the short hand form of the label-name/input-value pair in html.
  // By (click)="editMeal()", an output event is triggered out from the button directive and into the <edit-meal> parent component to trigger its editMeal() method.
  template: `
    <div class="meal-form">
      <h3>Edit Meal:</h3>

      <input [(ngModel)]="meal.name" type="text" placeholder="Name" class="input-sm" #editName>
      <input [(ngModel)]="meal.description" type="text" placeholder="Description" class="input-sm" #editDescription>
      <span> 0 <input [(ngModel)]="meal.calories" placeholder="Calories" class="input-sm-calories" type="range" min="0" max="3000" step="50" (click)="storeCalories(meal)" #editCalories> 3000 Calories </span><br>

    </div>
  `
})

export class EditMealComponent {
  // these are the attributes/properties of this class
  public store: EventEmitter<number> = new EventEmitter();
  public store_calories: number;

  // these are the properties "required" to instantiate this class. In this case, no argument is required to instantiate this class
  constructor() {}

  // storeCalories(meal) method outputs event trigger (store) with initial value of meal-calories enclosed to its parent(s) on click
  storeCalories(meal: Meal): void {
    this.store_calories = meal.calories;
    this.store.emit(this.store_calories);
  }

}
