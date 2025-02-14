import { Request, Response } from 'express';
import ExperienceService from '../services/experienceService';

class ExperienceController {
    private experienceService: ExperienceService;

    constructor() {
        this.experienceService = new ExperienceService();
    }

    public async addExperience(req: Request, res: Response): Promise<void> {
        try {
            const experienceData = req.body;
            const newExperience = await this.experienceService.addExperience(experienceData);
            res.status(201).json(newExperience);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async listExperiences(req: Request, res: Response): Promise<void> {
        try {
            const experiences = await this.experienceService.listExperiences();
            res.status(200).json(experiences);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ExperienceController;