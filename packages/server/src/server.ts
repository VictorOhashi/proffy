import express from 'express';

const app = express();

app.post('/users', (req, res) => {
  const users = [{ name: 'nome', text: 'text' }];
  return res.json(users);
});

app.listen(3333);
