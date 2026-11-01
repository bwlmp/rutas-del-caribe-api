# Rutas del Caribe API

API REST para la gestión de roles, usuarios, buses, viajes y reservas de la empresa de transporte Rutas del Caribe. Desarrollada con Node.js, Express y MySQL, con base de datos alojada en Clever Cloud y API desplegada en Render.

## 1. Información del proyecto

- **Nombre:** Rutas del Caribe API
- **Backend:** Node.js y Express
- **Base de datos:** MySQL
- **Driver de conexión:** mysql2
- **Variables de entorno:** dotenv
- **Despliegue:** Render
- **Base de datos en la nube:** Clever Cloud

## 2. Enlaces

- **Repositorio GitHub:** https://github.com/bwlmp/rutas-del-caribe-api
- **API pública:** https://rutas-del-caribe-api-1.onrender.com
- **Estado de la API:** https://rutas-del-caribe-api-1.onrender.com/api/health

## 3. Estructura del proyecto

```text
rutas-del-caribe-api/
├── src/
│   ├── config/
│   │   └── dbConfig.js
│   ├── controllers/
│   │   ├── busesController.js
│   │   ├── reservasController.js
│   │   ├── rolesController.js
│   │   ├── usuariosController.js
│   │   └── viajesController.js
│   ├── models/
│   │   ├── busModel.js
│   │   ├── reservaModel.js
│   │   ├── rolModel.js
│   │   ├── usuarioModel.js
│   │   └── viajeModel.js
│   ├── routes/
│   │   ├── busesRoutes.js
│   │   ├── reservasRoutes.js
│   │   ├── rolesRoutes.js
│   │   ├── usuariosRoutes.js
│   │   └── viajesRoutes.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

La carpeta `config` contiene la configuración de conexión con MySQL. Los `models` interactúan con los datos, los `controllers` procesan las solicitudes y las `routes` definen los endpoints de la API. El archivo `server.js` configura Express y registra las rutas.

## 4. Requisitos

- Node.js y npm.
- Acceso a una instancia MySQL.
- Git, para clonar el repositorio.

## 5. Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/bwlmp/rutas-del-caribe-api.git
```

Entrar en la carpeta:

```bash
cd rutas-del-caribe-api
```

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto y configurar las variables de conexión.

## 6. Variables de entorno

El proyecto utiliza las siguientes variables para conectarse a MySQL:

```env
DB_HOST=host_de_mysql
DB_USER=usuario_de_mysql
DB_PASSWORD=contraseña_de_mysql
DB_NAME=nombre_de_la_base_de_datos
DB_PORT=3306
```

Los valores anteriores son ejemplos; deben reemplazarse por las credenciales correspondientes a la instancia de MySQL.

**Seguridad:** no publicar el archivo `.env` ni compartir contraseñas en el repositorio. El proyecto incluye `.gitignore` para excluir este archivo.

## 7. Ejecutar el servidor

Para iniciar la API:

```bash
npm start
```

Para desarrollo con reinicio automático:

```bash
npm run dev
```

El puerto local predeterminado es `3000`, salvo que se defina la variable `PORT`.

## 8. Endpoints de la API

La URL base es:

```text
https://rutas-del-caribe-api-1.onrender.com
```

### Estado de la API

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/` | Verifica que la API responde. |
| GET | `/api/health` | Consulta el estado de la API. |

### Roles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/roles/getRoles` | Obtener todos los roles. |
| GET | `/api/roles/getRolById/:id` | Obtener un rol por identificador. |
| POST | `/api/roles/postRol` | Crear un rol. |
| PUT | `/api/roles/putRol/:id` | Actualizar un rol. |
| DELETE | `/api/roles/deleteRol/:id` | Eliminar un rol. |

### Usuarios

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/usuarios/getUsuarios` | Obtener todos los usuarios. |
| GET | `/api/usuarios/getUsuarioById/:id` | Obtener un usuario por identificador. |
| POST | `/api/usuarios/postUsuario` | Crear un usuario. |
| PUT | `/api/usuarios/putUsuario/:id` | Actualizar un usuario. |
| DELETE | `/api/usuarios/deleteUsuario/:id` | Eliminar un usuario. |

### Buses

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/buses/getBuses` | Obtener todos los buses. |
| GET | `/api/buses/getBusById/:id` | Obtener un bus por identificador. |
| POST | `/api/buses/postBus` | Crear un bus. |
| PUT | `/api/buses/putBus/:id` | Actualizar un bus. |
| DELETE | `/api/buses/deleteBus/:id` | Eliminar un bus. |

### Viajes

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/viajes/getViajes` | Obtener todos los viajes. |
| GET | `/api/viajes/getViajeById/:id` | Obtener un viaje por identificador. |
| POST | `/api/viajes/postViaje` | Crear un viaje. |
| PUT | `/api/viajes/putViaje/:id` | Actualizar un viaje. |
| DELETE | `/api/viajes/deleteViaje/:id` | Eliminar un viaje. |

### Reservas

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/reservas/getReservas` | Obtener todas las reservas. |
| GET | `/api/reservas/getReservaById/:id` | Obtener una reserva por identificador. |
| POST | `/api/reservas/postReserva` | Crear una reserva. |
| PUT | `/api/reservas/putReserva/:id` | Actualizar una reserva. |
| DELETE | `/api/reservas/deleteReserva/:id` | Eliminar una reserva. |

`:id` representa el identificador del registro que se desea consultar, actualizar o eliminar.

## 9. Ejemplos de uso

### Consultar los roles

Solicitud:

```http
GET https://rutas-del-caribe-api-1.onrender.com/api/roles/getRoles
```

Respuesta de ejemplo basada en el formato del controlador:

```json
{
  "data": [
    {
      "id_rol": 1,
      "nombre_rol": "Administrador",
      "descripcion": "Administra el sistema y sus registros"
    }
  ]
}
```

Los datos mostrados son ilustrativos; la respuesta real depende de los registros almacenados en MySQL.

### Crear un registro

Para crear un rol, se utiliza el método `POST` en:


/api/roles/postRol


El cuerpo debe enviarse en formato JSON, con los campos que requiere el modelo de roles. Los campos exactos deben verificarse en `src/models/rolModel.js`.

En Insomnia o Postman, seleccionar el método `POST`, elegir el tipo de cuerpo JSON y enviar los datos correspondientes.

## 10. Códigos de respuesta HTTP

Los controladores implementan, entre otros, los siguientes códigos:

| Código | Significado |
|---|---|
| 200 | Solicitud procesada correctamente. |
| 201 | Registro creado. |
| 404 | Registro no encontrado. |
| 500 | Error del servidor o de la operación de base de datos. |

La respuesta específica depende del endpoint y del resultado de la operación.

## 11. Pruebas de la API

La API se puede probar mediante Insomnia o Postman. Para los endpoints CRUD, se deben comprobar las operaciones de consulta, creación, actualización y eliminación, así como los casos de identificadores inexistentes y datos inválidos.

La colección de pruebas se puede exportar en formato JSON como evidencia del proceso de validación.

## 12. Despliegue

El backend está publicado en Render y utiliza una instancia MySQL de Clever Cloud.

Render ejecuta la aplicación mediante el comando:


npm start


Las variables de entorno se configuran en el panel del servicio, sin necesidad de incluir las credenciales en el repositorio.

## 13. Autoría y propósito académico

Proyecto académico de integración de bases de datos y desarrollo de API REST para la gestión de información de una empresa de transporte.

El objetivo es demostrar la conexión entre un backend desarrollado con Node.js y Express, una base de datos relacional MySQL y un servicio de despliegue público.
