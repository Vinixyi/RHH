import { Router } from 'express';
import PositionsController from '../controllers/positionsController';

const router = Router();
const positionsController = new PositionsController();

router.post('/', positionsController.createPosition.bind(positionsController));
router.get('/', positionsController.getAllPositions.bind(positionsController));
router.get('/:id', positionsController.getPositionById.bind(positionsController));
router.put('/:id', positionsController.updatePosition.bind(positionsController));
router.delete('/:id', positionsController.deletePosition.bind(positionsController));

export default router;