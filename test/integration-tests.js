const request = require("supertest");
const authServiceUrl = "http://localhost:3001";

describe("Auth Service", () => {
  it("should return a token on login", async () => {
    const res = await request(authServiceUrl)
      .post("/login")
      .send({ username: "admin", password: "password" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
