import { Request, Response } from 'express';
import TrainingsService from '../services/trainingsService';

class TrainingsController {
    private trainingsService: TrainingsService;

    constructor() {
        this.trainingsService = new TrainingsService();
    }

    public async addTraining(req: Request, res: Response): Promise<void> {
        try {
            const trainingData = req.body;
            const newTraining = await this.trainingsService.addTraining(trainingData);
            res.status(201).json(newTraining);
        } catch (error) {
            res.status(500).json({ message: 'Error adding training', error });
        }
    }

    public async listTrainings(req: Request, res: Response): Promise<void> {
        try {
            const trainings = await this.trainingsService.listTrainings();
            res.status(200).json(trainings);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving trainings', error });
        }
    }
}

export default TrainingsController;