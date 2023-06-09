import request from "supertest";
import app from "../app";

const result = {data: {hi:"Hello World"}};

describe("Graphql test", () => {
    it("Get Hi, content-type application/json", (done)=>{
        request(app)
            .post("/graph")
            .set("Content-Type", "application/json; charset = UTF-8")
            .send ({query: "{hi}"})
            .expect(200)
            .end((err,res: request.Response) => {
                expect (err).toBeNull();
                expect (res.body).toEqual(result);
                done();
            });

    });
    it ("returns 'Hello World' with content-type application/graphql", (done)=>{
        request(app)
        .post("/graphql")
        .set("Content-Type", "application/graphql; charset=UTF-8")
        .send("{hi}")
        .expect(200)
        .end((err, res: request.Response) => {
          expect(err).toBeNull();
          expect(res.body).toEqual(result);
          done();
      });
    });
})