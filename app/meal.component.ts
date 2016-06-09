import { Component, EventEmitter } from 'angular2/core';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model.ts';

// {{ model }} "mustache tags" is used to call a one-way stream from a component to its template

@Component ({
  selector: 'meal-display',
  directives: [ EditMealComponent ],
  // these are the inputs and outputs of the meal-display component. They will also be called in the parent component <meal-list> where there is a <meal-display> tag. <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (edit)="editMeal($event)" ></meal-display>
  // (edit) in the <meal-display> tag will output the 'edit' EventEmitter that will trigger the editMeal() method. The argument of the EventEmitter object ($event) OR [name.value, description.value, ...] is passed to the editMeal method.
  // they will also be declared in MealComponent class declaration before they can be used in the class declaration
  // parent component <meal-list> transfers its property "meal" to <meal-display> child component's input property [meal].
  // child component <meal-display> outputs an event (editTrigger) to its parent <meal-list>
  inputs: [ 'meal', 'selectedMeal' ],
  template: `
    <div>
      <h3 class="cursor" >{{ meal.name }}</h3>
      <p *ngIf="meal === selectedMeal" >{{ meal.description }}</p>
      <p *ngIf="meal === selectedMeal" >{{ meal.calories }}</p>
    </div>
    <edit-meal [meal]="meal" *ngIf="meal === selectedMeal" ></edit-meal>
  `
})

export class MealComponent {
  // input property  ['meal'] passed down from parent-component <meal-list> has to be declared here as public meal:Meal before the input property can be used here. In this case, we do not need to use it so we do not declare it
  // No output propeties to declare and then use

  construct() {}

}
