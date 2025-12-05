// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import the post router
const postRouter = require('./routes/posts.routes.js');

// Main welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount the router at /api/v1/posts
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
