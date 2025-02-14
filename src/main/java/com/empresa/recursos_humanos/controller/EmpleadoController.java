package com.empresa.recursos_humanos.controller;

import com.empresa.recursos_humanos.model.Empleado;
import com.empresa.recursos_humanos.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @PostMapping("/contratar")
    public Empleado contratarEmpleado(@RequestBody Empleado empleado) {
        return empleadoService.contratarEmpleado(empleado);
    }

    @GetMapping
    public List<Empleado> obtenerEmpleados() {
        return empleadoService.obtenerEmpleados();
    }
}