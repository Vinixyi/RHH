import { Router } from 'express';
import CandidatesController from '../controllers/candidatesController';

const router = Router();
const candidatesController = new CandidatesController();

router.post('/', candidatesController.createCandidate);
router.get('/', candidatesController.getAllCandidates);
router.get('/:id', candidatesController.getCandidateById);
router.put('/:id', candidatesController.updateCandidate);
router.delete('/:id', candidatesController.deleteCandidate);

export default router;