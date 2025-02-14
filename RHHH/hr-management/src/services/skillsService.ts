import { Skill } from '../models/skill';

export class SkillsService {
    private skills: Skill[] = [];

    public addSkill(skill: Skill): Skill {
        this.skills.push(skill);
        return skill;
    }

    public getSkills(): Skill[] {
        return this.skills;
    }

    public getSkillById(id: number): Skill | undefined {
        return this.skills.find(skill => skill.id === id);
    }

    public updateSkill(updatedSkill: Skill): Skill | undefined {
        const index = this.skills.findIndex(skill => skill.id === updatedSkill.id);
        if (index !== -1) {
            this.skills[index] = updatedSkill;
            return updatedSkill;
        }
        return undefined;
    }

    public deleteSkill(id: number): boolean {
        const index = this.skills.findIndex(skill => skill.id === id);
        if (index !== -1) {
            this.skills.splice(index, 1);
            return true;
        }
        return false;
    }
}