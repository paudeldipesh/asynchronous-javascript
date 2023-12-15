const promiseOne = new Promise((resolve, reject) => {
    // Asynchronous Code
    setTimeout(() => {
        // Getting data from database
        console.log("The data of Ram is given below:");
        const student = { name: "Ram", id: 1 };
        resolve(student);
        // reject(new Error("Data not found."));
    }, 8000);
});
promiseOne
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
/* ---------------------------------------------- */
const promiseTwo = getStudent(9);
promiseTwo
    .then((student) => getSubjects(student.name))
    .then((subjects) => getMarks(subjects[2]))
    .then((mark) => console.log(`Mark: ${mark}`))
    .catch((error) => console.log(error.message));
function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Id: ${id}`);
            resolve({ name: "Dilip Raj Paudel", id: id });
        }, 2000);
    });
}
function getSubjects(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Name: ${name}`);
            resolve(["Math", "Social", "GK"]);
        }, 2000);
    });
}
function getMarks(subject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Subject: ${subject}`);
            resolve(100);
            // reject(new Error("Mark not found."));
        }, 2000);
    });
}
export {};
