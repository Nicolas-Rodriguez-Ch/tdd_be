import request from "http";

describe("Server Initialization", () => {
  it("should start the server without errors", (done) => {
    const req = request.get("http://127.0.0.1:8000", (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
    req.on("error", (err) => {
      done(err);
    });
  });
});
