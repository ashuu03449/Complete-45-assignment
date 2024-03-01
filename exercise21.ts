// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface ProgrammingCourse {
    name : string
    location : string
    onsiteStudents : number
}

let ProgrammingCourse = {
    name : "Typescript & Javascript",
    location : "Governor Sindh",
    onsiteStudents : 50000
};

console.log(ProgrammingCourse);