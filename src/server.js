import express from 'express';
import async, { reject } from 'async';
import router from './routes';

const app = express();
app.use('/', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('app listening on port', PORT);
});

export { app };
