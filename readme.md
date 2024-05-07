# Atix Challenge

Prueba técnica que consiste en crear un todo list utilizando el MERN stack.

## Bibliotecas utilizadas

### Frontend (CRA)

- General: **react / react-dom**
- Validaciones: **zod**
- Formularios: **react-hook-form**
- Navegación: **react-router-dom**
- Peticiones a la api: **axios**
- Cookies: **js-cookies**

### Backend

- General: **express**
- BD: **mongoose**
- Validaciones: **zod**
- JWT/Encriptación: **jsonwebtoken/bcryptjs**
- Logs: **morgan**
- Cookies: **cookie-parser**

# Pasos para iniciar el proyecto

### Requisitos

Tener instalado:

- Docker Desktop
- Node +18

## Iniciar la base de datos y el servidor

1. Entrar a la carpeta atix-back y ejecutar el siguiente comando\
   `docker compose up -d `
2. Instalar las dependencias del backend\
   `npm i`
3. Levantar el servidor(port 4000)\
   `npm run dev`

## Iniciar el frontend

1. Entrar a la carpeta atix-front e instalar las dependencias\
   `npm i`
2. Levantar el servidor de front\
   `npm start`
3. En caso no se abra el enlace, ingresar en el navegador\
   `localhost:3000`
