# HR Management System

Este proyecto es un sistema de gestión de Recursos Humanos diseñado para facilitar la administración de candidatos, empleados, competencias, idiomas, capacitaciones, puestos y experiencia laboral. A continuación se detallan las funcionalidades y la estructura del proyecto.

## Funcionalidades

- **Gestión de Candidatos**: Permite crear, actualizar, eliminar y listar candidatos.
- **Gestión de Empleados**: Facilita la adición, modificación, eliminación y consulta de empleados.
- **Gestión de Competencias**: Administra las competencias requeridas para los puestos.
- **Gestión de Idiomas**: Permite agregar y listar los idiomas que dominan los empleados y candidatos.
- **Gestión de Capacitaciones**: Administra las capacitaciones realizadas por los empleados.
- **Gestión de Puestos**: Permite crear, actualizar y listar los puestos disponibles en la organización.
- **Gestión de Experiencia Laboral**: Administra la experiencia laboral de los candidatos y empleados.

## Estructura del Proyecto

```
hr-management
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── candidatesController.ts
│   │   ├── employeesController.ts
│   │   ├── experienceController.ts
│   │   ├── languagesController.ts
│   │   ├── positionsController.ts
│   │   ├── skillsController.ts
│   │   └── trainingsController.ts
│   ├── models
│   │   ├── candidate.ts
│   │   ├── employee.ts
│   │   ├── experience.ts
│   │   ├── language.ts
│   │   ├── position.ts
│   │   ├── skill.ts
│   │   └── training.ts
│   ├── routes
│   │   ├── candidatesRoutes.ts
│   │   ├── employeesRoutes.ts
│   │   ├── experienceRoutes.ts
│   │   ├── languagesRoutes.ts
│   │   ├── positionsRoutes.ts
│   │   ├── skillsRoutes.ts
│   │   └── trainingsRoutes.ts
│   ├── services
│   │   ├── candidatesService.ts
│   │   ├── employeesService.ts
│   │   ├── experienceService.ts
│   │   ├── languagesService.ts
│   │   ├── positionsService.ts
│   │   ├── skillsService.ts
│   │   └── trainingsService.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Configura la base de datos y las variables de entorno según sea necesario.
5. Ejecuta `npm start` para iniciar la aplicación.

## Uso

La aplicación proporciona una API RESTful que permite interactuar con los diferentes recursos del sistema. Se pueden realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) a través de las rutas definidas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.