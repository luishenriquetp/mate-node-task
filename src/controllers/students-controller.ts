import { Request, Response } from "express";
import { StudentsRepository } from "../repositories/students-repositories";
import { Student } from "../types/student";


// GET /students
export const getAllStudents = (req: Request, res: Response) => {
  const students = Object.values(StudentsRepository);
};

// POST /students
export const addStudent = (req: Request, res: Response) => {
  
  const newStudent: Student = req.body;
  
  if (!newStudent.id) {
    return res.status(400).json({ error: "Invalid student data" });
  }

  StudentsRepository[newStudent.id] = newStudent;
  res.status(201).json(newStudent);
};

// DELETE /students/:id
export const deleteStudent = (req: Request, res: Response) => {
  const { id } = req.params;
  if (StudentsRepository[id]) {
    const studentToDelete = StudentsRepository[id];
    StudentsRepository[id] = studentToDelete;

    res.status(204).end();
  } else {
    res.status(404).json({ error: "Student not found" });
  }
};

// PUT /students/:id
export const updateStudent = (req: Request, res: Response) => {
  const { id } = req.params;
  const updates: Partial<Student> = req.body;

  const student = StudentsRepository[id];
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  StudentsRepository[id] = { ...student, ...updates };
  res.json(StudentsRepository[id]);
};

// GET /students/:id
export const getStudentById = (req: Request, res: Response) => {
  const { id } = req.params;
  const student = StudentsRepository[id];
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
};
