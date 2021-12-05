# Api Colors
Repositorio dedicado al consumo de los colores registrados, con la capacidad de crear nuevos colores para uso interno de la empresa "ColoresWeb".

![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-red?style=for-the-badge&logo=javascript)

[![api-colors](https://img.shields.io/badge/api--colors-1.0.0-brightgreen.svg)](https://github.com/brayanz741/api_colors)

## Características

* Listar colores registrados (Todos, Por Página, Único).
* Crear nuevos colores.
* Al ser un repositorio público entregamos un .sql para que pueda probarlo localmente (y un archivo .env de ejemplo con lo mínimo para ejecutar el proceso desde su pc.)

## Requisitos
* Mysql: Link de la documentación [Aquí](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html)
* NodeJs: Link de la documentación [Aquí](https://nodejs.org/es/download/releases/) Buscar la versión Node.js 14.17.0	o superior
* NPM (generalmente viene con NodeJs al menos que se instalen por separado) Link de la documentación [Aquí](https://docs.npmjs.com/cli/v8/commands/npm-install) Instalar por separado sí solo sí no lo descargo en conjunto con NodeJs

### Proceso de ejecución
1. Primero sino hemos descargado el repositorio, podemos clonarlo o descargarlo desde [aquí](https://github.com/brayanz741/api_colors)
2. Para levantar la aplicación debe estar en la raíz del proyecto y ejecutar en orden los siguientes comandos (cuando es por primera vez).
```
npm install
node index.js
```
o

```
npm install
npm start
```
3. Si ya ha usado el sistema anteriormente y solo quiere levantar el sistema lo hace con el siguiente comando
```
node index.js
```
o

```
npm start
```
### Adicionales

#### Librerias instaladas
* dotenv v.10.0.0
* express v.4.17.1
* express-http-context v.1.2.4
* moment v.2.29.1
* mysql2 v.2.3.3
* nodemon v.2.0.15
* winston v.3.3.3

#### Otros
Codigo .env para ejecutar en desde su computador personal
```
#Base de datos MySql
_HOSTDB_= 'localhost'
_USERDB_= 'root'
_PASSDB_= ''
_DB_= 'test'
```
Codigo de ejecución .sql para tener valores minimos de prueba
```
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for colors
-- ----------------------------
DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `year` int(11) NULL DEFAULT NULL,
  `color` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `pantone_value` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of colors
-- ----------------------------
INSERT INTO `colors` VALUES (1, 'cerulean', 2000, '#98B2D1', '15-4020');
INSERT INTO `colors` VALUES (2, 'fuchsia rose', 2001, '#C74375', '17-2031');
INSERT INTO `colors` VALUES (3, 'true red', 2002, '#BF1932', '19-1664');
INSERT INTO `colors` VALUES (4, 'aqua sky', 2003, '#7BC4C4', '14-4811');
INSERT INTO `colors` VALUES (5, 'tigerlily', 2004, '#E2583E', '17-1456');
INSERT INTO `colors` VALUES (6, 'blue turquoise', 2005, '#53B0AE', '15-5217');
INSERT INTO `colors` VALUES (7, 'sand dollar', 2006, '#DECDBE', '13-1106');
INSERT INTO `colors` VALUES (8, 'chili pepper', 2007, '#9B1B30', '19-1557');
INSERT INTO `colors` VALUES (9, 'blue iris', 2008, '#5A5B9F', '18-3943');
INSERT INTO `colors` VALUES (10, 'mimosa', 2009, '#F0C05A', '14-0848');
INSERT INTO `colors` VALUES (11, 'turquoise', 2010, '#45B5AA', '15-5519');
INSERT INTO `colors` VALUES (12, 'honeysuckle', 2011, '#D94F70', '18-2120');

SET FOREIGN_KEY_CHECKS = 1;
```
