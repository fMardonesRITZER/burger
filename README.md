## Proyecto Burger
Este proyecto es un ejemplo de uso de Node.js con Express.js, donde se conecta a una base de datos MongoDB utilizando Mongoose y se realizan operaciones CRUD. Además, se utiliza el motor de plantillas HBS para renderizar las vistas.

## Requisitos
Node.js (v18.15.0 o superior)
MongoDB

## Instalación
Clona el repositorio: git clone https://github.com/tu-usuario/burger.git
Entra al directorio del proyecto: cd burger
Instala las dependencias: npm install express nodemon hbs
Configuración
Crea un archivo .env en el directorio raíz del proyecto y define las siguientes variables de entorno:

```plaintext
Copy code
MONGODB_URI=<URL_de_conexión_a_MongoDB>
PORT=3000
Asegúrate de reemplazar <URL_de_conexión_a_MongoDB> con la URL de conexión a tu base de datos MongoDB.

Uso
Inicia el servidor localmente: npm start o npm run dev (con nodemon)
Accede a la aplicación en tu navegador web utilizando la URL: http://localhost:3000









