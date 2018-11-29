const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const validation = require("./validation");

router.get("/posts", postController.index);
router.get("/posts/new", postController.new);
router.post("/posts/create", validation.validatePosts, postController.create);
router.get("/posts/:id", postController.show);
router.post("/posts/:id/destroy", postController.destroy);
router.get("/posts/:id/edit", postController.edit);
router.post("/posts/:id/update", validation.validatePosts, postController.update);

module.exports = router;