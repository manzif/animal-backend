import express from 'express';
import animals from './animals'

const router = express.Router();

router.use('/api/v1/animals', animals)

export default router;
