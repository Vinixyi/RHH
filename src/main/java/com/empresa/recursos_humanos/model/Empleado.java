public class Empleado {
    private int id;
    private String cedula;
    private String nombre;
    private String fechaIngreso;
    private String departamento;
    private String puesto;
    private double salarioMensual;
    private String estado;

    public Empleado(int id, String cedula, String nombre, String fechaIngreso, String departamento, String puesto, double salarioMensual, String estado) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaIngreso = fechaIngreso;
        this.departamento = departamento;
        this.puesto = puesto;
        this.salarioMensual = salarioMensual;
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "id=" + id +
                ", cedula='" + cedula + '\'' +
                ", nombre='" + nombre + '\'' +
                ", fechaIngreso='" + fechaIngreso + '\'' +
                ", departamento='" + departamento + '\'' +
                ", puesto='" + puesto + '\'' +
                ", salarioMensual=" + salarioMensual +
                ", estado='" + estado + '\'' +
                '}';
    }

    // Getters and Setters can be added here if needed
}