import express from 'express';
import router from './routes';

const app = express();
app.use('/', router);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log('App running on port 3000');
});

module.exports = server;
