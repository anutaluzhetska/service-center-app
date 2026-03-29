import express from 'express';
const router = express.Router();

// Маршрути для адміна
router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

export default router;