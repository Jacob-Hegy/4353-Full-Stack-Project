import request from "supertest";
import app from "./index.js";

/* REGISTER */
describe("POST /auth/register", () => {
  describe("given a username and password", () => {
    // create userCreditial and clientInformation tables' entry with info
    test("should respond with 201 status code", async () => {
      const res = await request(app).post("/auth/register").send({
        username: "user",
        password: "pass",
      });
      expect(res.statusCode).toBe(201);
    });

    test("If username already exists in database responde with 409", async () => {
        const res = await request(app).post("/auth/register").send({
          username: "user",
          password: "pass",
        });
        expect(res.statusCode).toBe(409);
    })

    test("responds with clientInformation json", async () => {
      const res = await request(app).post("/auth/register").send({
        username: "user",
        password: "pass",
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

/* LOGIN */
describe("POST /auth/login", () => {
  describe("given a username and password", () => {
    // verify userCreditials and return jwt
    test("should respond with 200 status code", async () => {
      const res = await request(app).post("/auth/login").send({
        username: "user",
        password: "pass",
      });
      expect(res.statusCode).toBe(200);
    });
    test("should create cookie with token", async () => {
      const res = await request(app).post("/auth/login").send({
        username: "user",
        password: "pass",
      });
      expect(res.headers["set-cookie"]).toBeDefined();
    });
    test("responds with clientInformation json", async () => {
      const res = await request(app).post("/auth/login").send({
        username: "user",
        password: "pass",
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

/* UPDATE CLIENT INFORMATION */
describe("PATCH /user/:id/saveProfile", () => {
  describe("given a client information", () => {
    // create userCreditial and clientInformation tables' entry with info
    test("should respond with 200 status code", async () => {
      const res = await request(app).patch("/user/:id/saveProfile").send({
        id2: "a",
        fullname: "Udochukwu Amaefule",
        address1: "081 Russel Meadows",
        address2: "Apt. 928",
        city: "East Landen",
        state: "New Jersey",
        zip: 59807,
      });
      expect(res.statusCode).toBe(200);
    });
    test("responds with clientInformation json", async () => {
      const res = await request(app).patch("/user/:id/saveProfile").send({
        id2: "a",
        fullname: "Udochukwu Amaefule",
        address1: "081 Russel Meadows",
        address2: "Apt. 928",
        city: "East Landen",
        state: "New Jersey",
        zip: 59807,
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

/* ADD QUOTE */
describe("POST /quote/:id/addQuote", () => {
  describe("given a quote information", () => {
    // create Fuel Quote entry with given information and return price value
    test("should respond with 200 status code", async () => {
      const res = await request(app).post("/quote/:user/addQuote").send({
        address: "123 Maple Street Anytown, PA 17101",
        date: "2023-03-24",
        gals: 20,
      });
      expect(res.statusCode).toBe(200);
    });
    test("responds with price value in json", async () => {
      const res = await request(app).post("/quote/:user/addQuote").send({
        address: "123 Maple Street Anytown, PA 17101",
        date: "2023-03-24",
        gals: 30,
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

/* GET QUOTES */
describe("GET /quote/:id", () => {
  describe("given the users id in request params", () => {
    // return a list of all quotes associated with the provided client ID
    test("should respond with 200 status code", async () => {
      const res = await request(app).get("/quote/:user");
      expect(res.statusCode).toBe(200);
    });
    test("responds with price value in json", async () => {
      const res = await request(app).get("/quote/:user");
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
