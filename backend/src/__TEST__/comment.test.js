/* eslint-disable no-undef */
const container = require("../shared/bootstrap/container");
const supertest = require("supertest");

const server = container.resolve("server");
const app = server.getApp();

describe("Create comment", () => {
  it('It should response the POST method', async () => {
    const data = {
      "PostId": 1,
      "name": "titulo de comentario de prueba",
      "content": "mensaje de comenatrio de prueba",
      "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/comment").send(data);
    expect(response.statusCode).toBe(201);
  })
})



