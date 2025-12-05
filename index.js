// index.js (root) — entrypoint for the Express app
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import the post router from src/
const postRouter = require('./src/routes/posts.routes.js');

app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

module.exports = app;
