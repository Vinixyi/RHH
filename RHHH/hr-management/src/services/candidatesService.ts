import { Candidate } from '../models/candidate';

export class CandidatesService {
    private candidates: Candidate[] = [];

    public createCandidate(candidate: Candidate): Candidate {
        this.candidates.push(candidate);
        return candidate;
    }

    public updateCandidate(id: number, updatedCandidate: Candidate): Candidate | null {
        const index = this.candidates.findIndex(c => c.id === id);
        if (index !== -1) {
            this.candidates[index] = { ...this.candidates[index], ...updatedCandidate };
            return this.candidates[index];
        }
        return null;
    }

    public deleteCandidate(id: number): boolean {
        const index = this.candidates.findIndex(c => c.id === id);
        if (index !== -1) {
            this.candidates.splice(index, 1);
            return true;
        }
        return false;
    }

    public getCandidates(): Candidate[] {
        return this.candidates;
    }

    public filterCandidates(criteria: Partial<Candidate>): Candidate[] {
        return this.candidates.filter(candidate => {
            return Object.keys(criteria).every(key => 
                candidate[key as keyof Candidate] === criteria[key as keyof Candidate]
            );
        });
    }
}