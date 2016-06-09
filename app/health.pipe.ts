import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "health",
  pure: false
})

export class HealthPipe implements PipeTransform {

  transform(input: Meal[], args) {

    return input.filter((meal) => {
      if (args[0] === "unhealthy") {
        return meal.calories >= 500;
      } else if (args[0] === "healthy") {
        return meal.calories < 500;
      } else {
        return true;
      }
    });

  }
}
