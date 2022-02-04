const express = require("express");
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");
const router = express.Router();

router.route("/").post(authController.protect, postController.createPost);

router.route("/:email").get(authController.protect, postController.getAllPosts);

router
  .route("/:id")
  .get(authController.protect, postController.getPost)
  .patch(authController.protect, postController.updatePost)
  .delete(authController.protect, postController.deletePost);

module.exports = router;
