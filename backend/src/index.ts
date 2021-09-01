import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use('/static', express.static(path.join(__dirname, '../static')));
// TODO: check LFI (local file inclusion)

// CORS setup
const options: cors.CorsOptions = {
  origin: ['http://localhost:3000']
};
app.use(cors(options));

app.get('/', (req, res) => res.send('Hello, World!'));

import teamRouter from './routes/team';
app.use('/team', teamRouter);

import socialsRouter from './routes/socials';
app.use('/socials', socialsRouter);

import eventsRouter from './routes/events';
app.use('/events', eventsRouter);

import resourcesRouter from './routes/resources';
app.use('/resources', resourcesRouter);

app.listen(8080, () => {
  console.log('REST API running on http://localhost:8080');
});

// connect to monogodb: change localhost to mongo
