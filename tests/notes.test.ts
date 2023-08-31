import supertest from "supertest";
import app from "../src/app";
import { notes } from "../src/models/note";

describe("Notes CRUD API", () => {
  beforeEach(() => {
    notes.length = 0;
  });

  it("should create a new note", async () => {
    const newNote = { title: "Test Title", content: "Test content" };
    const response = await supertest(app).post("/notes").send(newNote);

    expect(response.statusCode).toBe(201)
    expect(response.body.title).toBe(newNote.title)
    expect(response.body.content).toBe(newNote.content)
  });
});
