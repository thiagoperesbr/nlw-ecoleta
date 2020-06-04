import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json(['Diego', 'Cleiton', 'Robson', 'Daniel', 'Thiago']);
});

app.listen(3333);
