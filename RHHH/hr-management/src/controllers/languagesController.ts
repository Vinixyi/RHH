import { Request, Response } from 'express';
import LanguagesService from '../services/languagesService';

class LanguagesController {
    private languagesService: LanguagesService;

    constructor() {
        this.languagesService = new LanguagesService();
    }

    public async addLanguage(req: Request, res: Response): Promise<void> {
        try {
            const languageData = req.body;
            const newLanguage = await this.languagesService.addLanguage(languageData);
            res.status(201).json(newLanguage);
        } catch (error) {
            res.status(500).json({ message: 'Error adding language', error });
        }
    }

    public async listLanguages(req: Request, res: Response): Promise<void> {
        try {
            const languages = await this.languagesService.listLanguages();
            res.status(200).json(languages);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving languages', error });
        }
    }
}

export default LanguagesController;