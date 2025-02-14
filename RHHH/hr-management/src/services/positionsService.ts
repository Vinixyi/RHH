import { Position } from '../models/position';

export class PositionsService {
    private positions: Position[] = [];

    public createPosition(position: Position): Position {
        this.positions.push(position);
        return position;
    }

    public updatePosition(id: number, updatedPosition: Position): Position | null {
        const index = this.positions.findIndex(pos => pos.id === id);
        if (index !== -1) {
            this.positions[index] = { ...this.positions[index], ...updatedPosition };
            return this.positions[index];
        }
        return null;
    }

    public getPositionById(id: number): Position | null {
        return this.positions.find(pos => pos.id === id) || null;
    }

    public getAllPositions(): Position[] {
        return this.positions;
    }

    public deletePosition(id: number): boolean {
        const index = this.positions.findIndex(pos => pos.id === id);
        if (index !== -1) {
            this.positions.splice(index, 1);
            return true;
        }
        return false;
    }
}