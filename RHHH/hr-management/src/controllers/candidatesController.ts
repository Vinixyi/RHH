import { Request, Response } from 'express';
import CandidatesService from '../services/candidatesService';

class CandidatesController {
    private candidatesService: CandidatesService;

    constructor() {
        this.candidatesService = new CandidatesService();
    }

    public async createCandidate(req: Request, res: Response): Promise<void> {
        try {
            const candidateData = req.body;
            const newCandidate = await this.candidatesService.createCandidate(candidateData);
            res.status(201).json(newCandidate);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateCandidate(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const candidateData = req.body;
            const updatedCandidate = await this.candidatesService.updateCandidate(id, candidateData);
            res.status(200).json(updatedCandidate);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteCandidate(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.candidatesService.deleteCandidate(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async listCandidates(req: Request, res: Response): Promise<void> {
        try {
            const candidates = await this.candidatesService.listCandidates();
            res.status(200).json(candidates);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default CandidatesController;