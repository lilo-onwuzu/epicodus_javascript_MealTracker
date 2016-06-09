export class Meal {
  public health: boolean;
  public day: string;
  public time: string;

  constructor(public name: string, public description: string, public calories: number) {
    this.day = new Date().toLocaleDateString();
    this.time = new Date().toLocaleTimeString();
  }

}
