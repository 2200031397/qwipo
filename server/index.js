const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const customerRouter = require('./route/router');

const dburl = 'mongodb+srv://charanchowdarynunnam:KzULXYPA8UqWl4R4@seequenze.ngp9l.mongodb.net/?retryWrites=true&w=majority&appName=Seequenze';

// Connect to MongoDB
mongoose.connect(dburl, {
  // Removed deprecated options
  // Optionally, you can add other options here if needed
})
.then(() => console.log('Connected to DB Successfully!'))
.catch((err) => console.log('DB Connection Error:', err.message));

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Customer routes
app.use('/api', customerRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
