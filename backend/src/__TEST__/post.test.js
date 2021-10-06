/* eslint-disable no-undef */
const container = require("../shared/bootstrap/container");
const supertest = require("supertest");

const server = container.resolve("server");
const app = server.getApp();

describe("Get all post", () => {
  it('It should response the GET method', async () => {
    const response = await supertest(app).get("/api/post");
    expect(response.statusCode).toBe(200);
  })
})

describe("Create post", () => {
  it('It should response the POST method', async () => {
    const data = {
      "name": "titulo de prueba",
      "content": "mensaje de prueba",
      "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/post").send(data);
    expect(response.statusCode).toBe(201);
  })
})

