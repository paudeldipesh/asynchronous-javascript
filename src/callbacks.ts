import Student, {
  StudentCallback,
  SubjectsCallback,
  MarksCallback,
} from "./types";

getStudent(3, displayStudent);

function displayStudent(student: Student) {
  console.log("Student", student);
  getSubjects(student.name, displaySubjects);
}

function displaySubjects(subjects: string[]) {
  console.log("Subject", subjects);
  getMarks(subjects[1], displayMarks);
}

function displayMarks(mark: number) {
  console.log("Mark", mark);
}

function getStudent(id: number, callback: StudentCallback) {
  setTimeout(() => {
    console.log(`Data of student with id ${id}.`);
    callback({ name: "Dipesh Paudel", id: id });
  }, 2000);
}

function getSubjects(name: string, callback: SubjectsCallback) {
  setTimeout(() => {
    console.log(`Subjects of the student whose name is ${name}.`);
    callback(["Math", "Science", "Computer"]);
  }, 2000);
}

function getMarks(subject: string, callback: MarksCallback) {
  setTimeout(() => {
    console.log(`Mark of the student in ${subject}.`);
    callback(80);
  }, 2000);
}
