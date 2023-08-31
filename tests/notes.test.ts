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

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newNote.title);
    expect(response.body.content).toBe(newNote.content);
  });
  it("should read a note", async () => {
    const newNote = {
      title: "Test Title for read",
      content: "Test content for read",
    };
    const creationResponse = await supertest(app).post("/notes").send(newNote);
    const response = await supertest(app).get(
      `/notes/${creationResponse.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(newNote.title);
    expect(response.body.content).toBe(newNote.content);
  });

  it("should update an existing note", async () => {
    const newNote = {
      title: "Test Title for update",
      content: "Test content for update",
    };
    const creationResponse = await supertest(app).post("/notes").send(newNote);

    const updatedNote = {
      title: "Updated Title",
      content: "Updated Content",
    };
    const response = await supertest(app)
      .put(`/notes/${creationResponse.body.id}`)
      .send(updatedNote);

    expect(response.status).toBe(202);
    expect(response.body.title).toBe(updatedNote.title);
    expect(response.body.content).toBe(updatedNote.content);
  });
});
