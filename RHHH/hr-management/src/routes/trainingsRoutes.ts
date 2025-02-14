import { Router } from 'express';
import TrainingsController from '../controllers/trainingsController';

const router = Router();
const trainingsController = new TrainingsController();

router.post('/', trainingsController.createTraining);
router.get('/', trainingsController.getAllTrainings);
router.get('/:id', trainingsController.getTrainingById);
router.put('/:id', trainingsController.updateTraining);
router.delete('/:id', trainingsController.deleteTraining);

export default router;