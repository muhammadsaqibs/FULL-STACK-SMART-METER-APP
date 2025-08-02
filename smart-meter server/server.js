const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/units', require('./routes/units'));

// Root Route
app.get('/', (req, res) => {
  res.send("Smart Meter API Running");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
