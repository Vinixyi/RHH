import { Router } from 'express';
import LanguagesController from '../controllers/languagesController';

const router = Router();
const languagesController = new LanguagesController();

router.post('/', languagesController.addLanguage.bind(languagesController));
router.get('/', languagesController.getLanguages.bind(languagesController));
router.get('/:id', languagesController.getLanguageById.bind(languagesController));
router.put('/:id', languagesController.updateLanguage.bind(languagesController));
router.delete('/:id', languagesController.deleteLanguage.bind(languagesController));

export default router;