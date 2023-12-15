getStudent(3, displayStudent);
function displayStudent(student) {
    console.log("Student", student);
    getSubjects(student.name, displaySubjects);
}
function displaySubjects(subjects) {
    console.log("Subject", subjects);
    getMarks(subjects[1], displayMarks);
}
function displayMarks(mark) {
    console.log("Mark", mark);
}
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
