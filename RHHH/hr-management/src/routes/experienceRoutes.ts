import { Router } from 'express';
import ExperienceController from '../controllers/experienceController';

const router = Router();
const experienceController = new ExperienceController();

router.post('/', experienceController.addExperience);
router.get('/', experienceController.getExperiences);

export default router;