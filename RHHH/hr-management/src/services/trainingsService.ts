import { Training } from '../models/training';

export class TrainingsService {
    private trainings: Training[] = [];

    public addTraining(training: Training): Training {
        this.trainings.push(training);
        return training;
    }

    public getAllTrainings(): Training[] {
        return this.trainings;
    }

    public getTrainingById(id: number): Training | undefined {
        return this.trainings.find(training => training.id === id);
    }

    public updateTraining(id: number, updatedTraining: Training): Training | undefined {
        const index = this.trainings.findIndex(training => training.id === id);
        if (index !== -1) {
            this.trainings[index] = { ...this.trainings[index], ...updatedTraining };
            return this.trainings[index];
        }
        return undefined;
    }

    public deleteTraining(id: number): boolean {
        const index = this.trainings.findIndex(training => training.id === id);
        if (index !== -1) {
            this.trainings.splice(index, 1);
            return true;
        }
        return false;
    }
}