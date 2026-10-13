const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/db-health', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ db: 'ok', time: result.rows[0].now });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
