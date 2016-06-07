import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model.ts';

// {{ model }} "mustache tags" is used to call a one-way stream from a component to its template

@Component ({
  selector: 'meal-display',
  directives: [ NewMealComponent, EditMealComponent ],
  inputs: [ 'meal', 'selectedMeal' ],
  template: `
    <div>
      <h3 class="cursor" >{{ meal.name }}</h3>
      <p *ngIf="meal === selectedMeal" >{{ meal.description }}</p>
    </div>
    <new-meal [meal]="meal" *ngIf="meal === selectedMeal" ></new-meal>
    <edit-meal [meal]="meal" *ngIf="meal === selectedMeal" ></edit-meal>
  `
})

export class MealComponent {
  public meal: Meal;
}
