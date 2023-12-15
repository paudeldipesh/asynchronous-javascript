console.log("first line");
setTimeout(() => {
    console.log("Getting data from Database.");
}, 2000);
console.log("last line");
/* ---------------------------------------------- */
const student = getStudentData();
console.log(student);
function getStudentData() {
    setTimeout(() => {
        console.log("Getting data from Database.");
        return { name: "Dinesh Paudel", id: 7 };
    }, 2000);
}
/* ---------------------------------------------- */
getStudent(3, (student) => {
    console.log("Student", student);
    getSubjects(student.name, (subjects) => {
        console.log("Subject", subjects);
        getMarks(subjects[1], (mark) => console.log("Mark", mark));
    });
});
function getStudent(id, callback) {
    setTimeout(() => {
        console.log(`Data of student with id ${id}.`);
        callback({ name: "Dipesh Paudel", id: id });
    }, 2000);
}
function getSubjects(name, callback) {
    setTimeout(() => {
        console.log(`Subjects of the student whose name is ${name}.`);
        callback(["Math", "Science", "Computer"]);
    }, 2000);
}
function getMarks(subject, callback) {
    setTimeout(() => {
        console.log(`Mark of the student in ${subject}.`);
        callback(80);
    }, 2000);
}
export {};
