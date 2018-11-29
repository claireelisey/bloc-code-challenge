const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const validation = require("./validation");

router.post("/posts/:postId/comments/create",
    validation.validateComments,
    commentController.create);

router.post("/posts/:postId/comments/:id/destroy",
    commentController.destroy);

module.exports = router;