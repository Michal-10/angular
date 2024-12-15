export enum CourseNames{
    A =  "הנדסת תוכנה",
    B="גרפיקה",
    C= "חשבונאות",
    D= "תכנות"
}

export class Course{

    constructor(
    public IdCourse:number,
    public NameCourse:string,
    public subjectCourse:CourseNames
){}
} 