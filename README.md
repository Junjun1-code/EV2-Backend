Como utilizar:
1) Dentro de un editor de codigo (por ejemplo, visual studio code) ingresar a una terminal valida.
2) Verificar que dentro de la terminal se encuentre en la carpeta correcta, en caso contrario, acceder a la carpeta correcta con el comando CD
3) Ejecutar en la terminal el comando "npm install dotenv express jsonwebtoken pg"
4) En la altura EV2-Backend se encontrara un archivo ".env copy", modificarle su nombre a ".env" y modificar los datos para acceder a la base de datos.
   - Se recomienda utilizar "PORT=3000, DB_HOST=localhost, DB_PORT=5432, DB_DATABASE=libreShopping"
5) Crear una base de datos en una aplicacion especializada, por ejemplo pgadmin4.
   - Es necesario que el nombre de la base de datos coincida con el parametro agregado en el .env [DB_DATABASE="..."]
6) Ejecutar en una query tool las lineas que se encuentran en el archivo "/database/DDL.sql" y "database/DML.sql"
7) Ejecutar el comando "node index.js" o "npm start"
8) Usando una extencion que admite generar consultas a una API, por ejemplo Thunder Client, realizar peticiones con el siguiente formato:
   - http://{DB_HOST}:{PORT}/{Ruta_a_acceder}/{requisitos}
   - Se pueden encontrar las rutas existentes en la carpeta "/src/server/routers/{tabla}.router.js"
   - Algunas rutas requieren un token de autorización, se puede obtener utilizando la ruta "/login" enviandole en el payload del body los datos de un usuario registrado en la base de datos. 
      - Es posibles identificar cuales rutas requieren un token de    autorización dentro de "/src/server/routers/{tabla}.router.js", al tener el parametro de función "authToken"
   - Algunas rutas especificas requieren tener el token del administrador (encontrado en la base de datos sus datos de autenticacion) o el token del mismo usuario que haya creado el dato.
   - El token de autorización se debe agregar al "header", ingresando un nuevo tipo de header llamado "Authorization" y de contenido debe tener 'Bearer {token}'
9) En caso de querer cerrar el servidor, NO cerrar la terminal, esto no cerrara el proceso y continuara encendido hasta detenerlo manualmente. Utilizar "CTRL + C" dentro de la terminal para apagar el proceso.
   - En caso de cerrar la terminal sin detener el proceso, se puede ejecutar el comando "npx kill-port {PORT}"