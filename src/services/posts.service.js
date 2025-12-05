// src/services/posts.service.js
// Simple service stub for posts — prepares for DB integration.

module.exports.getAllPosts = async function getAllPosts() {
  // placeholder: return the same payload structure used previously
  return { message: 'Fetching all blog posts from the modular router!' };
};

module.exports.getPostById = async function getPostById(id) {
  // placeholder: return an object when id provided, otherwise null
  if (!id) return null;
  return { id, message: 'Fetching data for post with ID: ' + id };
};

module.exports.createPost = async function createPost(payload) {
  // placeholder: echo the created resource (would normally persist)
  return { id: 'new-id', ...payload };
};
