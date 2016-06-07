import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

// *ngFor directive is used an an attrubute of the div. It will duplicate create one div branch for every meal in mealList
// (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the clicked Meal to be selected
// [class.selected] is used to create and uncreate a class called "selected" for the clicked meal div so that a div has the selected class until another meal div is clicked

@Component({
  selector: 'meal-list',
  directives: [ MealComponent ],
  inputs: [ 'mealList' ],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">All</option>
      <option value="healthy">Healthy Foods</option>
      <option value="unhealthy">Unhealthy Foods</option>
      <option value="">Date</option>
    </select>

    <div *ngFor="#meal of mealList" (click)="selectMeal(meal)" [class.selected]="meal === selectedMeal" >
      <meal-display [meal]="meal" [selectedMeal]="selectedMeal" ></meal-display>
    </div>
  `
})

export class MealListComponent{

  public mealList: Meal[];
  public selectedMeal: Meal;

  construct() {}

  selectMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
