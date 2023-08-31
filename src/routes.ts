import express, { Request, Response } from "express";
import { notes } from "./models/note";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello world");
});

router.post("/notes", (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newNote = {
    id: notes.length + 1,
    title,
    content
  }

  notes.push(newNote)
  res.status(201).json(newNote)
});

export default router;
