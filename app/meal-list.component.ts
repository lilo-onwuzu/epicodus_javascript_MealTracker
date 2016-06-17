import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { Health_Date_Pipe } from './health.date.pipe';

// *ngFor directive is used as an attrubute of the div. It will duplicate/create one div branch for every meal in mealList
// (click)="selectMeal(meal)" attaches a click listener to the div for each meal to cause the "meal" to become the property "selectedMeal"
// [class.selected] is used to create and uncreate a class (floating class) called "selected" for the div of selectedMeal meal so that a div has the selected class temporarily until another meal div is clicked
// "#meal of mealList | health:filterHealth" : this expression passes the condition (string or number) "filterHealth" to args[0] of the health_date pipe
// The only meal objects in the Meal[] that will be passed onto the <meal-display> child component will be the ones filtered through the pipe
// health_date:sliderMinValue:sliderMaxValue:filterDate : sliderMinValue is passed to the health_date pipe as args[0]="minCalories", sliderMaxValue is passed to the pipe as args[1]="maxCalories"...
@Component({
  selector: 'meal-list',
  directives: [ MealComponent , NewMealComponent ],
  inputs: [ 'mealList' ],
  outputs: [ 'totalTrigger' ],
  pipes: [ Health_Date_Pipe ],
  template: `
    <div class="row">

      <div class="col-sm-6">
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
          <p><input type="date" [(ngModel)] = "filterDate" class="input-sm"/></p>
          <span>{{ filterDate }}</span>
        </section>
      </div>
    </div>

    <div *ngFor="#meal of mealList | health_date:sliderMinValue:sliderMaxValue:filterDate" (click)="selectMeal(meal)" [class.selected]="meal === selectedMeal" >
      <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (store2)="storeInitialCalories($event)" (change)="totalCalories_change(meal)"></meal-display>
    </div><br><br>

    <new-meal (newTrigger)="addMeal($event)" (newTrigger)="totalCalories_new($event)" (newTrigger)="sendTotalCalories()"></new-meal><br>



  `
})

export class MealListComponent{

  public mealList: Meal[];
  public selectedMeal: Meal;

  public sliderMinValue: number = 0;
  public sliderMaxValue: number = 3000;
  public filterDate: string;

  public total_calories: number = 0;
  public initialCalories: number = 0;
  public totalTrigger: EventEmitter<number> = new EventEmitter();

  // no required arguments to instantiate this class
  construct() {
    this.totalTrigger = new EventEmitter();
  }

  selectMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMeal: any[]) : void {
    this.mealList.push(new Meal(newMeal[0], newMeal[1], newMeal[2]));
  }

  collectDateFilter(filterOption) : void {
    this.filterDate = filterOption;
  }

  sendTotalCalories(): void {
    this.totalTrigger.emit(this.total_calories);
  }

  storeInitialCalories(calories: number) : void {
    this.initialCalories = calories;
  }

  // whenever the meal.calories slider in edit-meal is clicked, a "store" event is triggered from <edit-meal> to <meal-display> and then to <meal-list> that stores meal.calories at time of click. Then "only if the value of meal.calories changes", will the value of initialCalories be used to calculate total_calories thereby making the edit-meal component responsive to total_calories
  totalCalories_change(meal: Meal): void {
    this.total_calories = this.total_calories + meal.calories - this.initialCalories;
  }

  totalCalories_new(newMeal: any[]) : void {
    this.total_calories += newMeal[2];
  }

}
