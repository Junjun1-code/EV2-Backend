- SP

Como utilizar:
1) Dentro de un editor de codigo (por ejemplo, visual studio code) ingresar a una terminal valida.
2) Verificar que dentro de la terminal se encuentre en la carpeta correcta, en caso contrario, acceder a la carpeta correcta con el comando CD
3) Ejecutar en la terminal el comando "npm install dotenv express jsonwebtoken pg nodemon"
4) En la altura MAIN | EV2-Backend se encontrara un archivo ".env copy", modificarle su nombre a ".env" y modificar los datos para acceder a la base de datos.
   - Se recomienda utilizar "PORT=3000, DB_HOST=localhost, DB_PORT=5432, DB_DATABASE=libreShopping"
5) Crear una base de datos en una aplicacion especializada, por ejemplo pgadmin4.
6) Ejecutar en una query tool las lineas que se encuentran en el archivo "/database/DDL.sql" y "database/DML.sql"
7) Ejecutar el comando "node index.js" o "npm start"
8) Usando una extencion que admite generar consultas a una API, por ejemplo Thunder Client, realizar peticiones con el siguiente formato:
   - http://{DB_HOST}:{PORT}/{Ruta_a_acceder}/{requisitos}
   - Se pueden encontrar las rutas existentes en la carpeta "/src/server/routers/{tabla}.router.js"
   - Algunas rutas requieren un token de autorización, se puede obtener utilizando la ruta "/login" que tenga los datos de un usuario registrado en la base de datos dentro del body
   - El token de autorización se debe agregar al "header", ingresando un nuevo tipo de header llamado "Authorization" y de contenido debe tener 'Bearer {token}'
