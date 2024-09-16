"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentById = exports.updateStudent = exports.deleteStudent = exports.addStudent = exports.getAllStudents = void 0;
const students_repositorie_1 = require("../repositories/students-repositorie");
// GET /students
const getAllStudents = (req, res) => {
    const students = Object.values(students_repositorie_1.StudentsRepository);
};
exports.getAllStudents = getAllStudents;
// POST /students
const addStudent = (req, res) => {
    const newStudent = req.body;
    if (!newStudent.id) {
        return res.status(400).json({ error: "Invalid student data" });
    }
    students_repositorie_1.StudentsRepository[newStudent.id] = newStudent;
    res.status(201).json(newStudent);
};
exports.addStudent = addStudent;
// DELETE /students/:id
const deleteStudent = (req, res) => {
    const { id } = req.params;
    if (students_repositorie_1.StudentsRepository[id]) {
        const studentToDelete = students_repositorie_1.StudentsRepository[id];
        students_repositorie_1.StudentsRepository[id] = studentToDelete;
        res.status(204).end();
    }
    else {
        res.status(404).json({ error: "Student not found" });
    }
};
exports.deleteStudent = deleteStudent;
// PUT /students/:id
const updateStudent = (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const student = students_repositorie_1.StudentsRepository[id];
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    students_repositorie_1.StudentsRepository[id] = Object.assign(Object.assign({}, student), updates);
    res.json(students_repositorie_1.StudentsRepository[id]);
};
exports.updateStudent = updateStudent;
// GET /students/:id
const getStudentById = (req, res) => {
    const { id } = req.params;
    const student = students_repositorie_1.StudentsRepository[id];
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({ error: "Student not found" });
    }
};
exports.getStudentById = getStudentById;
