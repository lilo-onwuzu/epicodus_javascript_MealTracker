import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { Health_Date_Pipe } from './health.date.pipe';

// *ngFor directive is used an an attrubute of the div. It will duplicate create one div branch for every meal in mealList
// (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the clicked Meal to be selected
// [class.selected] is used to create and uncreate a class called "selected" for the clicked meal div so that a div has the selected class until another meal div is clicked
// ""#meal of mealList | health:filterHealth": this expression passes the selected option/condition "filterHealth" as args[0] of the health pipe. The "onDate($event.target.value)" method is called to pass "$event.target.value" or the "value" of the selected option to the component's property filterHealth
// The only Meal object in the meal [] that will be passed onto the <meal-display> child component will be the ones filtered through the pipe
//  health:filterHealth:filterDate: filterHealth represents args[0]="healthy" or "unhealthy" of conditions, filterDate represents args[1]="today" or "yesterday" of conditions
@Component({
  selector: 'meal-list',
  directives: [ MealComponent , NewMealComponent ],
  inputs: [ 'mealList' ],
  pipes: [ Health_Date_Pipe ],
  template: `
    <div class="row">
      <div class="col-md-6">
        <section class="range-slider">
          <p>Filter Meals By Calories:</p>
          <input type="range" min="0" max="3000" step="50" [(ngModel)] = "sliderMinValue"/>
          <input type="range" min="0" max="3000" step="50" [(ngModel)] = "sliderMaxValue"/>
          <span> {{ sliderMinValue }} - {{ sliderMaxValue }} </span>
        </section>
      </div>

      <div class="col-md-6">
        <section class="date-selection">
          <p>Filter Meals By Date:</p>
          <p><input type="date" [(ngModel)] = "filterDate"/></p>
          <span>{{ filterDate }}</span>
        </section>
      </div>
    </div>

    <div *ngFor="#meal of mealList | health_date:sliderMinValue:sliderMaxValue:filterDate" (click)="selectMeal(meal)" [class.selected]="meal === selectedMeal" >
      <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (store2)="collectCalories($event)" (change)="totalCalories_change(meal)"></meal-display>
    </div>

    <new-meal (newTrigger)="addMeal($event)" (newTrigger)="totalCalories_new($event)"></new-meal><br>

    <p>TotalCalories: {{ total_calories }}</p>
  `
})

export class MealListComponent{

  public mealList: Meal[];
  public selectedMeal: Meal;
  public sliderMinValue: number = 0;
  public sliderMaxValue: number = 3000;
  public filterDate: string;
  public total_calories: number = 0;
  public collect: number = 0;

  construct() {}

  selectMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMeal: any[]) : void {
    this.mealList.push(new Meal(newMeal[0], newMeal[1], newMeal[2]));
  }

  collectCalories(calories: number){
    this.collect = calories;
  }

  totalCalories_change(meal: Meal): void {
    this.total_calories = this.total_calories + meal.calories - this.collect;
  }

  totalCalories_new(newMeal: any[]) : void {
    this.total_calories += newMeal[2];
  }

  collectDateFilter(filterOption) : void {
    this.filterDate = filterOption;
  }

}
