// src/controllers/posts.controller.js
// Controller functions for posts

/**
 * Return all posts.
 * Preserves previous behavior by returning the same message wrapped
 * in a standardized response envelope.
 */
const postsService = require('../services/posts.service');

module.exports.getAllPosts = async function getAllPosts(req, res) {
  try {
    const payload = await postsService.getAllPosts();
    return res.status(200).json({
      success: true,
      data: payload
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Return a single post by ID.
 * If a post is not found, returns 404 with { success: false, message: 'Post not found' }.
 * Otherwise returns 200 with the post wrapped in the envelope.
 */
module.exports.getPostById = async function getPostById(req, res) {
  try {
    const postId = req.params.postId;

    const post = await postsService.getPostById(postId);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    return res.status(200).json({ success: true, data: post });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Create a new post.
 * Uses postsService.createPost and returns 201 with the created resource.
 */
module.exports.createPost = async function createPost(req, res) {
  try {
    const payload = req.body || {};
    const created = await postsService.createPost(payload);

    return res.status(201).json({ success: true, data: created });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Additional controller functions (updatePost, deletePost, etc.) would follow the same pattern.