const container = require("../shared/bootstrap/container");
const supertest = require("supertest");

const server = container.resolve("server");
const app = server.getApp();

//Registra una nueva accion
describe("Create action", () => {
  it('It should response the POST method', async () => {
    const data = {
        "PostId": 1,
        "isLiked": true,
        "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/action").send(data);
    expect(response.statusCode).toBe(201);
  })
})

//Error el post id no existe
describe("Error post id not exist", () => {
  it('It should response the POST method', async () => {
    const data = {
        "PostId": 0,
        "isLiked": true,
        "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/action").send(data);
    expect(response.statusCode).toBe(500);
  })
})

//el usuario ya tiene accion registrada pero la cambia a false
describe("Post action test", () => {
  it('It should response the POST method', async () => {
    const data = {
        "PostId": 1,
        "isLiked": false,
        "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/action").send(data);
    expect(response.statusCode).toBe(201);
  })
})

//el usuario ya tiene accion registrada pero la cambia a true
describe("Post action test", () => {
  it('It should response the POST method', async () => {
    const data = {
        "PostId": 1,
        "isLiked": true,
        "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/action").send(data);
    expect(response.statusCode).toBe(201);
  })
})

//El usuario registra la misma accion s eelimina registro
describe("Post action delete record", () => {
  it('It should response the POST method', async () => {
    const data = {
        "PostId": 1,
        "isLiked": true,
        "userEmail": "test@hotmail.com"
    }
    const response = await supertest(app).post("/api/action").send(data);
    expect(response.statusCode).toBe(201);
  })
})


