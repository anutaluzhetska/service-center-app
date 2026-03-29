import express from 'express';
const router = express.Router();

// Маршрути для клієнта
router.get('/', (req, res) => res.send('Client Dashboard'));

export default router;