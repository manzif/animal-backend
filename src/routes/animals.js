import express from 'express';
import AnimalLayersManager from '../controllers/animals'

const router = express.Router();

router.post('/save', AnimalLayersManager.saveAnimalData)
router.get('/layer', AnimalLayersManager.getAnimalLayer)

export default router;
