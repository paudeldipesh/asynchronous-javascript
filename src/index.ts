import Student from "./types";

console.log("first line");

setTimeout(() => {
  console.log("Getting data from Database.");
}, 2000);

console.log("last line");

/* ---------------------------------------------- */

const student = getStudentData();
console.log(student);

function getStudentData(): void {
  setTimeout(() => {
    console.log("Getting data from Database.");
    return { name: "Dinesh Paudel", id: 7 } as Student;
  }, 2000);
}

/* ---------------------------------------------- */

getStudent(3, (student: Student) => {
  console.log("Student", student);
  getSubjects(student.name, (subjects: string[]) => {
    console.log("Subject", subjects);
    getMarks(subjects[1], (mark: number) => console.log("Mark", mark));
  });
});

function getStudent(id: number, callback: (student: Student) => void): void {
  setTimeout(() => {
    console.log(`Data of student with id ${id}.`);
    callback({ name: "Dipesh Paudel", id: id });
  }, 2000);
}

function getSubjects(
  name: string,
  callback: (subjects: string[]) => void
): void {
  setTimeout(() => {
    console.log(`Subjects of the student whose name is ${name}.`);
    callback(["Math", "Science", "Computer"]);
  }, 2000);
}

function getMarks(subject: string, callback: (mark: number) => void): void {
  setTimeout(() => {
    console.log(`Mark of the student in ${subject}.`);
    callback(80);
  }, 2000);
}
