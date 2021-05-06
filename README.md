# Cryptocurrencies Monitor

![criptomonedas](https://img.s3wfg.com/web/img/images_uploaded/a/8/criptomonedas-bitcoin-ethereum-portada.jpg)

 
 ### Indice
- [Instalación](#instalación)
  - [Prerequisitos](#prerequisitos)
  - [Pasos para ejecutar el proyecto](#ejecutar-el-proyecto)
    - [1 Instalar dependencias](#1-dependencias)
    - [2 Configurar variables de entorno](#2-configurar-variables-de-ambiente)
    - [3 Ejecutar migraciones](#3-correr-migraciones)
    - [4 Correr el proyecto](#4-correr-el-proyecto)
    - [5 Correr pruebas unitarias](#5-correr-pruebas-unitarias)
- [Documentación swagger](#ver-documentación-del-proyecto)
# Instalación

## Prerequisitos
- Tener instalada la base de datos MySQL o en su defecto se puede usar [remotemysql](https://remotemysql.com/)
- Tener instalado node >= v10

## Ejecutar el proyecto

### 1 Dependencias
- Ejecutar el comando: `npm install` en la terminal

### 2 Configurar variables de ambiente
En la raiz del proyecto se debe tener un archivo nombrado `.env` 
dónde se deben inicar las variables globales
para uso del proyecto.
En el proyecto se puede encontrar un archivo `.env.example` como ejemplo para la creación del archivo `.env`

### 3 Correr migraciones
- Ejecutar el comando: `npm run migrations` en la terminal


### 4 Correr el proyecto
- Ejecutar el comando :`npm start` 

### 5 Correr pruebas unitarias
- Ejecutar el comando :`npm run test`
- Ejecutar el comando :`npm run coverage` para ver al covertura de código


# Ver documentación del proyecto
- EL servicio debe estar iniciado previamente (paso 4)
- Desde el navegador acceder a la ruta `http://{server}:{port}/api-docs`

