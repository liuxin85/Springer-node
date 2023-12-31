import express from 'express';
import morgan from 'morgan';
import { createWriteSteam } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { router as movieRouter } from './movie/index.js';

const app = express();

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

const accessLogStream = createWriteSteam('assess.log', { flags: 'a' });

app.use(morgan('common', { immediate: true, steam: accessLogStream }));
app.use('/movie', movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

app.get(/.*\/movie.*$/, function (request, response) {
  response.send('Movie Route');
});

app.listen(8080, () => {
  console.log(`Server is listening to http://localhost:8080`);
});
