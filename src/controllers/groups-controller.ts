import { Request, Response } from "express";
import { StudentsRepository } from "../repositories/students-repositories";
import { Student } from "../types/student";

// Utility function to get students by group
const getStudentsByGroup = (group: string): Student[] => {
  Object.values(StudentsRepository).filter(
    (student) => student.group === group
  );

  return [];
};

// GET /groups/:groupId
export const getAllStudentsInGroup = (req: Request, res: Response) => {
  const { groupId } = req.params;
  const students = getStudentsByGroup(groupId);
  res.json(students);
};

// POST /groups/:groupId
export const addStudentToGroup = (req: Request, res: Response) => {
  const { groupId } = req.params;
  const newStudent: Student = req.body;

  if (
    !newStudent
    //student should exist in array students
  ) {
    return res.status(400).json({ error: "Invalid student data" });
  }

  if (newStudent.group !== groupId) {
    return res
      .status(400)
      .json({ error: "Student group does not match path groupId" });
  }

  StudentsRepository[newStudent.id] = newStudent;
  res.status(201).json(newStudent);
};

// DELETE /groups/:groupId/:studentId
export const deleteStudentFromGroup = (req: Request, res: Response) => {
  const { groupId, studentId } = req.params;
  const student = StudentsRepository[studentId];

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  if (student.group !== groupId) {
    return res
      .status(400)
      .json({ error: "Student does not belong to this group" });
  }

  delete StudentsRepository[studentId];
  res.status(204).end();
};

// PUT /groups/:groupId/:studentId
export const updateStudentInGroup = (req: Request, res: Response) => {
  const { groupId, studentId } = req.params;
  const updates: Partial<Student> = req.body;

  const student = StudentsRepository[studentId];
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  if (student.group !== groupId) {
    return res
      .status(400)
      .json({ error: "Student does not belong to this group" });
  }

  StudentsRepository[studentId] = { ...student, ...updates };
  res.json(StudentsRepository[studentId]);
};

// GET /groups/:groupId/:studentId
export const getStudentInGroup = (req: Request, res: Response) => {
  const { groupId, studentId } = req.params;
  const student = StudentsRepository[studentId];

  if (student) {
    if (student.group === groupId) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Student not found in this group" });
    }
  } else {
    res.status(404).json({ error: "Student not found" });
  }
};

export const getAllGroups = (req: Request, res: Response) => {
  return [];
}