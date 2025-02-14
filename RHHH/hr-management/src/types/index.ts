export interface Candidate {
    id: number;
    cedula: string;
    nombre: string;
    puestoAlQueAspira: string;
    departamento: string;
    salarioEsperado: number;
    competencias: Skill[];
    capacitaciones: Training[];
    experienciaLaboral: Experience[];
    recomendadoPor: string;
}

export interface Employee {
    id: number;
    cedula: string;
    nombre: string;
    fechaIngreso: Date;
    departamento: string;
    puesto: string;
    salarioMensual: number;
    estado: string;
}

export interface Experience {
    empresa: string;
    puestoOcupado: string;
    fechaInicio: Date;
    fechaFin: Date;
    salario: number;
}

export interface Language {
    id: number;
    nombre: string;
    estado: string;
}

export interface Position {
    id: number;
    nombre: string;
    nivelRiesgo: string;
    salarioMinimo: number;
    salarioMaximo: number;
    estado: string;
}

export interface Skill {
    id: number;
    descripcion: string;
    estado: string;
}

export interface Training {
    id: number;
    descripcion: string;
    nivel: string;
    fechaInicio: Date;
    fechaFin: Date;
    institucion: string;
}