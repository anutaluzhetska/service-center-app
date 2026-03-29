import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()


app.get('/', (req, res) => {
  res.send('Service-Center App')
})

app.use(express.json());

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import masterRoutes from './routes/master.js';
import clientRoutes from './routes/client.js';

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/master', masterRoutes);
app.use('/client', clientRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

