import { Employee } from '../models/employee';

export class EmployeesService {
    private employees: Employee[] = [];

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public updateEmployee(id: number, updatedEmployee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            this.employees[index] = updatedEmployee;
        }
    }

    public deleteEmployee(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }

    public getEmployeeById(id: number): Employee | undefined {
        return this.employees.find(emp => emp.id === id);
    }

    public getAllEmployees(): Employee[] {
        return this.employees;
    }

    public getNewEmployeesReport(): Employee[] {
        const currentDate = new Date();
        return this.employees.filter(emp => {
            const entryDate = new Date(emp.fechaIngreso);
            const diffTime = Math.abs(currentDate.getTime() - entryDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 30; // Employees who joined in the last 30 days
        });
    }
}