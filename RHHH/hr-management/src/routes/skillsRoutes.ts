import { Router } from 'express';
import SkillsController from '../controllers/skillsController';

const router = Router();
const skillsController = new SkillsController();

router.post('/', skillsController.addSkill);
router.get('/', skillsController.getSkills);
router.get('/:id', skillsController.getSkillById);
router.put('/:id', skillsController.updateSkill);
router.delete('/:id', skillsController.deleteSkill);

export default router;