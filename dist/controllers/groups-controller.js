"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGroups = exports.getStudentInGroup = exports.updateStudentInGroup = exports.deleteStudentFromGroup = exports.addStudentToGroup = exports.getAllStudentsInGroup = void 0;
const students_repositorie_1 = require("../repositories/students-repositorie");
// Utility function to get students by group
const getStudentsByGroup = (group) => {
    Object.values(students_repositorie_1.StudentsRepository).filter((student) => student.group === group);
    return [];
};
// GET /groups/:groupId
const getAllStudentsInGroup = (req, res) => {
    const { groupId } = req.params;
    const students = getStudentsByGroup(groupId);
    res.json(students);
};
exports.getAllStudentsInGroup = getAllStudentsInGroup;
// POST /groups/:groupId
const addStudentToGroup = (req, res) => {
    const { groupId } = req.params;
    const newStudent = req.body;
    if (!newStudent
    //student should exist in array students
    ) {
        return res.status(400).json({ error: "Invalid student data" });
    }
    if (newStudent.group !== groupId) {
        return res
            .status(400)
            .json({ error: "Student group does not match path groupId" });
    }
    students_repositorie_1.StudentsRepository[newStudent.id] = newStudent;
    res.status(201).json(newStudent);
};
exports.addStudentToGroup = addStudentToGroup;
// DELETE /groups/:groupId/:studentId
const deleteStudentFromGroup = (req, res) => {
    const { groupId, studentId } = req.params;
    const student = students_repositorie_1.StudentsRepository[studentId];
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    if (student.group !== groupId) {
        return res
            .status(400)
            .json({ error: "Student does not belong to this group" });
    }
    delete students_repositorie_1.StudentsRepository[studentId];
    res.status(204).end();
};
exports.deleteStudentFromGroup = deleteStudentFromGroup;
// PUT /groups/:groupId/:studentId
const updateStudentInGroup = (req, res) => {
    const { groupId, studentId } = req.params;
    const updates = req.body;
    const student = students_repositorie_1.StudentsRepository[studentId];
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    if (student.group !== groupId) {
        return res
            .status(400)
            .json({ error: "Student does not belong to this group" });
    }
    students_repositorie_1.StudentsRepository[studentId] = Object.assign(Object.assign({}, student), updates);
    res.json(students_repositorie_1.StudentsRepository[studentId]);
};
exports.updateStudentInGroup = updateStudentInGroup;
// GET /groups/:groupId/:studentId
const getStudentInGroup = (req, res) => {
    const { groupId, studentId } = req.params;
    const student = students_repositorie_1.StudentsRepository[studentId];
    if (student) {
        if (student.group === groupId) {
            res.json(student);
        }
        else {
            res.status(404).json({ error: "Student not found in this group" });
        }
    }
    else {
        res.status(404).json({ error: "Student not found" });
    }
};
exports.getStudentInGroup = getStudentInGroup;
const getAllGroups = (req, res) => {
    return [];
};
exports.getAllGroups = getAllGroups;
