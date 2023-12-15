displayData();
async function displayData() {
    try {
        const student = await getStudent(5);
        const subjects = await getSubjects(student.name);
        const mark = await getMarks(subjects[0]);
        console.log("Mark", mark);
    }
    catch (error) {
        console.log(error.message);
    }
}
function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data of student with id ${id}.`);
            resolve({ name: "Devi Paudel", id });
            // reject(new Error("Data not found."));
        }, 2000);
    });
}
function getSubjects(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Subjects of the student whose name is ${name}.`);
            resolve(["Nepali", "Social", "GK"]);
        }, 2000);
    });
}
function getMarks(subject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Mark of the student in ${subject}.`);
            resolve(100);
            //   reject(new Error("Marks not found."));
        }, 2000);
    });
}
export {};
