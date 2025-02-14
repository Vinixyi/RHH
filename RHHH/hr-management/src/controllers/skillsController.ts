import { Request, Response } from 'express';
import SkillsService from '../services/skillsService';

class SkillsController {
    private skillsService: SkillsService;

    constructor() {
        this.skillsService = new SkillsService();
    }

    public async addSkill(req: Request, res: Response): Promise<void> {
        try {
            const skillData = req.body;
            const newSkill = await this.skillsService.addSkill(skillData);
            res.status(201).json(newSkill);
        } catch (error) {
            res.status(500).json({ message: 'Error adding skill', error });
        }
    }

    public async listSkills(req: Request, res: Response): Promise<void> {
        try {
            const skills = await this.skillsService.listSkills();
            res.status(200).json(skills);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving skills', error });
        }
    }
}

export default SkillsController;