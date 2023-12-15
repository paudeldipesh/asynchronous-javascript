import Student, {
  StudentCallback,
  SubjectsCallback,
  MarksCallback,
} from "./types";

const promiseOne: Promise<Student> = new Promise((resolve, reject) => {
  // Asynchronous Code
  setTimeout(() => {
    // Getting data from database
    console.log("The data of Ram is given below:");
    const student: Student = { name: "Ram", id: 1 };
    resolve(student);
    // reject(new Error("Data not found."));
  }, 8000);
});

promiseOne
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

/* ---------------------------------------------- */

const promiseTwo: Promise<Student> = getStudent(9);
promiseTwo
  .then((student: Student) => getSubjects(student.name))
  .then((subjects: string[]) => getMarks(subjects[2]))
  .then((mark: number) => console.log(`Mark: ${mark}`))
  .catch((error) => console.log(error.message));

function getStudent(id: number): Promise<Student> {
  return new Promise((resolve: StudentCallback, reject) => {
    setTimeout(() => {
      console.log(`Id: ${id}`);
      resolve({ name: "Dilip Raj Paudel", id: id });
    }, 2000);
  });
}

function getSubjects(name: string): Promise<string[]> {
  return new Promise((resolve: SubjectsCallback, reject) => {
    setTimeout(() => {
      console.log(`Name: ${name}`);
      resolve(["Math", "Social", "GK"]);
    }, 2000);
  });
}

function getMarks(subject: string): Promise<number> {
  return new Promise((resolve: MarksCallback, reject) => {
    setTimeout(() => {
      console.log(`Subject: ${subject}`);
      resolve(100);
      // reject(new Error("Mark not found."));
    }, 2000);
  });
}
