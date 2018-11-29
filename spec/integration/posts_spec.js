const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts/";
const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes : posts", () => {

    beforeEach((done) => {
        this.post;
        sequelize.sync({force: true}).then((res) => {
  
            Post.create({
            body: "Has anyone else done the coding assignment yet?"
            })
            .then((post) => {
                this.post = post;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
  
        });
  
    });

    describe("GET /posts", () => {

        it("should return a status code 200 and all posts", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                expect(body).toContain("Posts");
                expect(body).toContain("Has anyone else done the coding assignment yet?");
                done();
            });
        });
        
    }); 

});