// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');

// GET /api/v1/posts/
router.get('/', postsController.getAllPosts);

// GET /api/v1/posts/:postId
router.get('/:postId', postsController.getPostById);

// POST /api/v1/posts/
router.post('/', postsController.createPost);

module.exports = router;
