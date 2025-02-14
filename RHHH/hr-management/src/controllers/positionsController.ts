import { Request, Response } from 'express';
import { PositionsService } from '../services/positionsService';

export class PositionsController {
    private positionsService: PositionsService;

    constructor() {
        this.positionsService = new PositionsService();
    }

    public async createPosition(req: Request, res: Response): Promise<void> {
        try {
            const positionData = req.body;
            const newPosition = await this.positionsService.createPosition(positionData);
            res.status(201).json(newPosition);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updatePosition(req: Request, res: Response): Promise<void> {
        try {
            const positionId = req.params.id;
            const positionData = req.body;
            const updatedPosition = await this.positionsService.updatePosition(positionId, positionData);
            res.status(200).json(updatedPosition);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async listPositions(req: Request, res: Response): Promise<void> {
        try {
            const positions = await this.positionsService.listPositions();
            res.status(200).json(positions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}