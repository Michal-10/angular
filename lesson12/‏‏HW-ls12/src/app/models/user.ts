
export enum role{
    MANAGER='manager',
    TEACHER='teacher',
    STUDENT='student',
    SECRETARY='secretary'}
export class User{
    constructor(
       public id:number,
       public name:string,
       public role:role,
       public email:string,
       public password:string
    ){}
}