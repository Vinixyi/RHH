package recursohumano;

public class sistemaRecursohumano {
	import java.util.*;

	// Clase Empleado
	class Empleado {
	    private int id;
	    private String nombre;
	    private String departamento;
	    private double salario;
	    private int diasAsistencia;

	    public Empleado(int id, String nombre, String departamento, double salario) {
	        this.id = id;
	        this.nombre = nombre;
	        this.departamento = departamento;
	        this.salario = salario;
	        this.diasAsistencia = 0;
	    }

	    public int getId() { return id; }
	    public String getNombre() { return nombre; }
	    public String getDepartamento() { return departamento; }
	    public double getSalario() { return salario; }
	    public int getDiasAsistencia() { return diasAsistencia; }

	    public void setSalario(double salario) { this.salario = salario; }
	    public void setDepartamento(String departamento) { this.departamento = departamento; }
	    public void registrarAsistencia() { this.diasAsistencia++; }

	    @Override
	    public String toString() {
	        return "ID: " + id + ", Nombre: " + nombre + ", Departamento: " + departamento + ", Salario: " + salario + ", Asistencia: " + diasAsistencia + " días";
	    }
	}

	// Clase Gestión de Recursos Humanos
	class RecursosHumanos {
	    private List<Empleado> empleados = new ArrayList<>();

	    public void agregarEmpleado(int id, String nombre, String departamento, double salario) {
	        empleados.add(new Empleado(id, nombre, departamento, salario));
	    }

	    public void eliminarEmpleado(int id) {
	        empleados.removeIf(emp -> emp.getId() == id);
	    }

	    public void listarEmpleados() {
	        for (Empleado emp : empleados) {
	            System.out.println(emp);
	        }
	    }

	    public void actualizarSalario(int id, double nuevoSalario) {
	        for (Empleado emp : empleados) {
	            if (emp.getId() == id) {
	                emp.setSalario(nuevoSalario);
	                break;
	            }
	        }
	    }

	    public void registrarAsistencia(int id) {
	        for (Empleado emp : empleados) {
	            if (emp.getId() == id) {
	                emp.registrarAsistencia();
	                break;
	            }
	        }
	    }
	}

	// Clase principal
	public class Sistema {
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        RecursosHumanos rh = new RecursosHumanos();

	        while (true) {
	            System.out.println("1. Agregar Empleado\n2. Eliminar Empleado\n3. Listar Empleados\n4. Actualizar Salario\n5. Registrar Asistencia\n6. Salir");
	            int opcion = scanner.nextInt();
	            
	            if (opcion == 6) break;
	            
	            switch (opcion) {
	                case 1:
	                    System.out.print("ID: ");
	                    int id = scanner.nextInt();
	                    scanner.nextLine(); 
	                    System.out.print("Nombre: ");
	                    String nombre = scanner.nextLine();
	                    System.out.print("Departamento: ");
	                    String departamento = scanner.nextLine();
	                    System.out.print("Salario: ");
	                    double salario = scanner.nextDouble();
	                    rh.agregarEmpleado(id, nombre, departamento, salario);
	                    break;
	                case 2:
	                    System.out.print("ID del empleado a eliminar: ");
	                    int idEliminar = scanner.nextInt();
	                    rh.eliminarEmpleado(idEliminar);
	                    break;
	                case 3:
	                    rh.listarEmpleados();
	                    break;
	                case 4:
	                    System.out.print("ID del empleado: ");
	                    int idActualizar = scanner.nextInt();
	                    System.out.print("Nuevo Salario: ");
	                    double nuevoSalario = scanner.nextDouble();
	                    rh.actualizarSalario(idActualizar, nuevoSalario);
	                    break;
	                case 5:
	                    System.out.print("ID del empleado: ");
	                    int idAsistencia = scanner.nextInt();
	                    rh.registrarAsistencia(idAsistencia);
	                    break;
	                default:
	                    System.out.println("Opción no válida.");
	            }
	        }
	        scanner.close();
	    }
	}


}
