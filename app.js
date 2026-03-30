import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()


app.get('/', (req, res) => {
  res.send('Service-Center App')
})

app.use(express.json());

import authRoutes from './routes/auth.js';
import masterRoutes from './routes/master.js';
import adminRoutes from './routes/admin.js';
import clientRoutes from './routes/client.js';

app.use('/api/auth', authRoutes);
app.use('/api/master', masterRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/client', clientRoutes);


const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

