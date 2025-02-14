export interface Candidate {
    id: number;
    cedula: string;
    nombre: string;
    puestoAlQueAspira: string;
    departamento: string;
    salarioEsperado: number;
    competencias: string[];
    capacitaciones: string[];
    experienciaLaboral: string[];
    recomendadoPor: string;
}