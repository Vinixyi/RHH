import { Router } from 'express';
import EmployeesController from '../controllers/employeesController';

const router = Router();
const employeesController = new EmployeesController();

// Rutas para empleados
router.post('/', employeesController.addEmployee);
router.get('/', employeesController.getAllEmployees);
router.get('/:id', employeesController.getEmployeeById);
router.put('/:id', employeesController.updateEmployee);
router.delete('/:id', employeesController.deleteEmployee);

export default router;