package com.empresa.recursos_humanos.repository;

import com.empresa.recursos_humanos.model.Empleado;
import java.util.ArrayList;
import java.util.List;

public class EmpleadoRepository {
    private List<Empleado> empleados;

    public EmpleadoRepository() {
        this.empleados = new ArrayList<>();
    }

    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
    }

    public void eliminarEmpleado(Empleado empleado) {
        empleados.remove(empleado);
    }

    public List<Empleado> obtenerEmpleados() {
        return empleados;
    }
}