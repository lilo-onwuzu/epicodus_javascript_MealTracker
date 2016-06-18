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

    <div *ngFor="#meal of mealList | health_date:sliderMinValue:sliderMaxValue:filterDate" (click)="selectMeal(meal)" [class.selected]="meal === selectedMeal" (click)="loop()">
      <meal-display [meal]="meal" [selectedMeal]="selectedMeal" (store2)="storeInitialCalories($event)"  (change2)="changedCalories($event)" (change2)="sendTotalCalories()"></meal-display>
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
  public initialCalories: number;
  public new_calories: number = 0;
  public totalTrigger: EventEmitter<number> = new EventEmitter();
  public array: number[] = [];

  // no required arguments to instance <meal-list></meal-list>
  construct() {}

  selectMeal(clickedMeal: Meal) : void {
    this.selectedMeal = clickedMeal;

    // anytime a meal is clicked, push the calorie value into an array. This will help with compting total_calories
    this.array.push(clickedMeal.calories);
  }

  addMeal(newMeal: any[]) : void {
    this.mealList.push(new Meal(newMeal[0], newMeal[1], newMeal[2]));
  }

  collectDateFilter(filterOption) : void {
    this.filterDate = filterOption;
  }

  totalCalories_new(newMeal: any[]) : void {
    this.total_calories += newMeal[2];
  }

  sendTotalCalories() : void {
    this.totalTrigger.emit(this.total_calories);
  }

  // whenever the editcalorie input is clicked redefine initialCalories
  storeInitialCalories(calories: number) : void {
    this.initialCalories = calories;
  }

  // calorieChanged(meal) method outputs event trigger (changeTrigger) with "changed" value of meal-calories enclosed to its parent(s) on change
  // changeTrigger sends event trigger only if calorie value actually changes
  changedCalories(calories: number) : void {
    this.new_calories = calories;

    if (this.initialCalories === undefined) {
      this.total_calories = this.total_calories + this.new_calories - this.array[0];
    } else {
      this.total_calories = this.total_calories + this.new_calories - this.initialCalories;
    }
    // empty array so when another meal is selected, this.aray[0] corresponds to the first calorie_value entered where this_initial calories is undefined
    this.array = [];

  }

}
