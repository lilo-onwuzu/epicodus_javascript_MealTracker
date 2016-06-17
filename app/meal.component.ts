import { Component, EventEmitter } from 'angular2/core';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model.ts';

// {{ model }} "mustache tags" is used to call a one-way data stream from a component's model to its template

@Component ({
  selector: 'meal-display',
  // list all children components separated by commas
  directives: [ EditMealComponent ],
  // these are the inputs and outputs of the meal-display component. They will also be called in the parent component <meal-list> where there is a <meal-display> tag. <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (store2)="collectCalories($event)" ></meal-display>
  // inputs and outputs need to be declared in MealComponent class declaration before they can be used there to create methods etc.
  // parent component <meal-list> transfers its property "meal" to <meal-display> child component's input property [meal].
  inputs: [ 'meal', 'selectedMeal' ],
  // "store" output property from <edit-meal> is used to trigger the storeAgain(<value held in "store" EventEmitter>) method which send another event trigger "store2" to the parent of <meal-display>, <meal-list>
  outputs: [ 'store2', 'change2' ],
  template: `
    <div>
      <h3 class="cursor" >{{ meal.name }}</h3>

      <div class="details">
        <p *ngIf="meal === selectedMeal" >{{ meal.description }}</p>
        <p *ngIf="meal === selectedMeal" >{{ meal.calories }}</p>
        <small *ngIf="meal === selectedMeal" >{{ meal.day }} {{ meal.time }}</small>
      </div>

    </div>

    <edit-meal *ngIf="meal === selectedMeal" [meal]="meal" (store)="storeAgain($event)" (changeTrigger)="changeAgain($event)"></edit-meal>
  `
})

export class MealComponent {
  // input property  ['meal'] passed down from parent-component <meal-list> has to be declared here as public meal:Meal before the input property can be used here. In this case, we do not need to use it so we do not declare it
  // No output propeties to declare and then use
  public store2: EventEmitter<number> = new EventEmitter();
  public change2: EventEmitter<number> = new EventEmitter();

  construct() {}

  storeAgain(initialCalories: number): void {
    this.store2.emit(initialCalories);
  }

  changeAgain(calories: number): void {
    this.change2.emit(calories);
  }

}
