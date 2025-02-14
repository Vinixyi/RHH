export class ExperienceService {
    private experiences: Experience[] = [];

    public addExperience(experience: Experience): void {
        this.experiences.push(experience);
    }

    public getExperiences(): Experience[] {
        return this.experiences;
    }

    public getExperienceById(id: number): Experience | undefined {
        return this.experiences.find(exp => exp.id === id);
    }

    public updateExperience(id: number, updatedExperience: Experience): boolean {
        const index = this.experiences.findIndex(exp => exp.id === id);
        if (index !== -1) {
            this.experiences[index] = updatedExperience;
            return true;
        }
        return false;
    }

    public deleteExperience(id: number): boolean {
        const index = this.experiences.findIndex(exp => exp.id === id);
        if (index !== -1) {
            this.experiences.splice(index, 1);
            return true;
        }
        return false;
    }
}

interface Experience {
    id: number;
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    salary: number;
}