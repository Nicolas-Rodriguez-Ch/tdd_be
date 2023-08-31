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
    content,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

router.get("/notes/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: "Note not Found" });
  }
});

router.put("/notes/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const note = notes.find((note) => note.id === id);
  const { content, title } = req.body;

  if (note) {
    note.content = content;
    note.title = title;
    res.status(202).json(note);
  } else {
    res.status(404).json({ message: "Note not Found" });
  }
});

export default router;
