export class Question {
    constructor(
      public id: number|undefined,
      public name: string,
      public email: string,
      public published: Date,
      public details: string
    ) { }
  }