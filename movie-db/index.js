import express from 'express';
import { router as movieRouter } from './movie/index.js';

const app = express();

app.use('/movie', movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

app.get(/.*\/movie.*$/, function (request, response) {
  response.send('Movie Route');
});

app.listen(8080, () => {
  console.log(`Server is listening to http://localhost:8080`);
});
