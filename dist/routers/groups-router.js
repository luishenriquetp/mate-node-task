"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groups_controller_1 = require("../controllers/groups-controller");
const router = (0, express_1.Router)();
// Define routes for groups
router.get("/", groups_controller_1.getAllGroups);
router.get("/:id", groups_controller_1.getAllStudentsInGroup);
router.post("/:id", groups_controller_1.addStudentToGroup);
router.delete("/:groupId/:studentId", groups_controller_1.deleteStudentFromGroup);
router.put("/:groupId/:studentId", groups_controller_1.updateStudentInGroup);
router.get("/:groupId/:studentId", groups_controller_1.getStudentInGroup);
exports.default = router;
