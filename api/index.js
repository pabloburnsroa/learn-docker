const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      name: 'John Doe',
    },
    {
      id: '2',
      name: 'John Doe2',
    },
    {
      id: '3',
      name: 'John Doe3',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
