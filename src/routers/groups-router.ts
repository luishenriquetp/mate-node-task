import { Router } from "express";
import {
  getAllStudentsInGroup,
  addStudentToGroup,
  deleteStudentFromGroup,
  updateStudentInGroup,
  getStudentInGroup,
  getAllGroups,
} from "../controllers/groups-controller";

const router = Router();

// Define routes for groups
router.get("/", getAllGroups);
router.get("/:id", getAllStudentsInGroup);
router.post("/:id", addStudentToGroup);
router.delete("/:groupId/:studentId", deleteStudentFromGroup);
router.put("/:groupId/:studentId", updateStudentInGroup);
router.get("/:groupId/:studentId", getStudentInGroup);

export default router;
