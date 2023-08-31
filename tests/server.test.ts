import supertest from "supertest";
import app from "../src/app";

describe("Server Initialization", () => {
  it("should start the server without errors", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
