package com.empresa.recursos_humanos.service;

import com.empresa.recursos_humanos.model.Empleado;
import com.empresa.recursos_humanos.repository.EmpleadoRepository;

import java.util.List;

public class EmpleadoService {
    private final EmpleadoRepository empleadoRepository;

    public EmpleadoService(EmpleadoRepository empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }

    public void contratarEmpleado(Empleado empleado) {
        empleadoRepository.agregarEmpleado(empleado);
    }

    public List<Empleado> obtenerEmpleados() {
        return empleadoRepository.listarEmpleados();
    }
}