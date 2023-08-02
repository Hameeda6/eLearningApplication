const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3001; // Choose a port number that is not used by other apps

// Set up CORS configuration
app.use(cors());

// Create a proxy middleware for your Moodle API
const moodleApiProxy = createProxyMiddleware({
  target: 'http://localhost/moodle', // Replace with your Moodle API URL
  changeOrigin: true,
});

// Use the proxy middleware for requests with path starting with '/moodle'
app.use('/moodle', moodleApiProxy);

app.listen(port, () => {
  console.log(`Custom proxy server is running on http://localhost:${port}`);
});
