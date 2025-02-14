# Recursos Humanos

Este proyecto es un sistema de gestión de Recursos Humanos que permite manejar la información de los empleados de una empresa. A continuación se detallan los componentes principales del sistema.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/main/java/com/empresa/recursos_humanos**: Contiene el código fuente de la aplicación.
  - **App.java**: Punto de entrada de la aplicación.
  - **controller/EmpleadoController.java**: Maneja las operaciones relacionadas con los empleados.
  - **model/Empleado.java**: Representa a un empleado en el sistema.
  - **repository/EmpleadoRepository.java**: Gestiona los datos de los empleados.
  - **service/EmpleadoService.java**: Contiene la lógica de negocio relacionada con los empleados.
  
- **src/main/resources/application.properties**: Archivo de configuración de la aplicación.

- **src/test/java/com/empresa/recursos_humanos/AppTest.java**: Contiene las pruebas unitarias para la clase App.

- **pom.xml**: Archivo de configuración de Maven que define las dependencias del proyecto.

## Instrucciones para Ejecutar

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta el siguiente comando para compilar el proyecto:
   ```
   mvn clean install
   ```
4. Para ejecutar la aplicación, utiliza el siguiente comando:
   ```
   mvn exec:java -Dexec.mainClass="com.empresa.recursos_humanos.App"
   ```

## Instrucciones para Probar

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```
mvn test
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.