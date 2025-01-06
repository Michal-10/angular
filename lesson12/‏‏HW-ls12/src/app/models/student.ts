export class Student {
   [x: string]: any;
   constructor(
      public id: number,
      public name: string,
      public age: number,
      public address: string,
      public leavingDate?: Date,
      public isActive?: boolean,
      public isPayed?: boolean
   ) {
   }

}