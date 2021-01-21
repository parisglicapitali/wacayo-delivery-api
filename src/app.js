import express from 'express';

import middlewares from './middlewares/middlewares';
import routes from './routes/index';

// inicialization
const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(middlewares);

// routes
app.use('/api', routes);

export default app;