export class Meal {
  public date: any;
  public day: string;
  public split1: string[];
  public split2: string[];

  // all attributes defined or instantiated within the constructor
  constructor(public name: string, public description: string, public calories: number) {
    this.date = new Date().toJSON();
    this.split1 = this.date.split("-");
    this.split2 = this.split1[2].split("T");
    this.day = this.split1[0] + "-" + this.split1[1] + "-" + this.split2[0];
  }

}
