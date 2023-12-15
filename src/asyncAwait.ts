import Student, { SubjectsCallback, MarksCallback } from "./types";

displayData();

async function displayData(): Promise<void> {
  try {
    const student: Student = await getStudent(5);
    const subjects: string[] = await getSubjects(student.name);
    const mark: number = await getMarks(subjects[0]);
    console.log("Mark", mark);
  } catch (error: any) {
    console.log(error.message);
  }
}

function getStudent(id: number): Promise<Student> {
  return new Promise(
    (
      resolve: (value: Student) => void,
      reject: (reason?: any) => void
    ): void => {
      setTimeout(() => {
        console.log(`Data of student with id ${id}.`);
        resolve({ name: "Devi Paudel", id });
        // reject(new Error("Data not found."));
      }, 2000);
    }
  );
}

function getSubjects(name: string): Promise<string[]> {
  return new Promise((resolve: SubjectsCallback): void => {
    setTimeout(() => {
      console.log(`Subjects of the student whose name is ${name}.`);
      resolve(["Nepali", "Social", "GK"]);
    }, 2000);
  });
}

function getMarks(subject: string): Promise<number> {
  return new Promise((resolve: MarksCallback, reject): void => {
    setTimeout(() => {
      console.log(`Mark of the student in ${subject}.`);
      resolve(100);
      //   reject(new Error("Marks not found."));
    }, 2000);
  });
}
