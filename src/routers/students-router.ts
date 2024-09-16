import { Router } from "express";
import {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
} from "../controllers/students-controller";

const router = Router();

// Define routes for students
router.get("/", getAllStudents);
router.post("/", addStudent);
router.delete("/:id", deleteStudent);
router.put("/:studentId", updateStudent);
router.get("/:studentId", getStudentById);

export default router;
