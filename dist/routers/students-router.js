"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const students_controller_1 = require("../controllers/students-controller");
const router = (0, express_1.Router)();
// Define routes for students
router.get("/", students_controller_1.getAllStudents);
router.post("/", students_controller_1.addStudent);
router.delete("/:id", students_controller_1.deleteStudent);
router.put("/:studentId", students_controller_1.updateStudent);
router.get("/:studentId", students_controller_1.getStudentById);
exports.default = router;
