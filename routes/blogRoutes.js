const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

//BLOG ROUTES
router.get("/", blogController.blog_index);

//POST
router.post("/", blogController.blog_create_post);

//CREATE BLOG
router.get("/create", blogController.blog_create_get);

//GET ID
router.get("/:id", blogController.blog_details);

//DELETE
router.delete("/:id", blogController.blog_delete);

module.exports = router;
