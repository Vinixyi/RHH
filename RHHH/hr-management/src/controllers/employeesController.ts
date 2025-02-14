import { Request, Response } from 'express';
import EmployeesService from '../services/employeesService';

class EmployeesController {
    private employeesService: EmployeesService;

    constructor() {
        this.employeesService = new EmployeesService();
    }

    public async addEmployee(req: Request, res: Response): Promise<void> {
        try {
            const employeeData = req.body;
            const newEmployee = await this.employeesService.addEmployee(employeeData);
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const employeeData = req.body;
            const updatedEmployee = await this.employeesService.updateEmployee(id, employeeData);
            res.status(200).json(updatedEmployee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.employeesService.deleteEmployee(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const employee = await this.employeesService.getEmployee(id);
            res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getAllEmployees(req: Request, res: Response): Promise<void> {
        try {
            const employees = await this.employeesService.getAllEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default EmployeesController;