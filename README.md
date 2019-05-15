Este proyecto se inició con [Create React App] (https://github.com/facebook/create-react-app).

## Instalación

1.- Clone el proyecto en su directorio local:
### `git clone https://github.com/IvanLamas/Catstagram.git`

2.- Acceda a la raíz del proyecto y ejecute el comando de instalación de dependencias:
### `npm install --save`

## Scripts disponibles

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo. <br>
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.

La página se volverá a cargar si realiza ediciones. <br>
También verá cualquier error de pelusa en la consola.

### `npm test`

Inicia el corredor de prueba en el modo de observación interactiva. <br>
Consulte la sección sobre [ejecutar pruebas] (https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Crea la aplicación para la producción en la carpeta `build`. <br>
Combina correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La compilación se reduce y los nombres de archivo incluyen los hashes. <br>
¡Su aplicación está lista para ser implementada!

Consulte la sección sobre [implementación] (https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `npm run eject`

** Nota: esta es una operación unidireccional. Una vez que 'expulsa', ¡no puede volver! **

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga un control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto, estás por tu cuenta.

No tienes que usar nunca `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para ello.

## Respuestas de la prueba técnica Front End - Rokode

1.- En caso de que no se haya implementado el módulo de imágenes
    favoritas, ¿qué tecnología/herramientas utilizarías para guardar los
    favoritos de cada visitante de manera tal que cada browser tenga una lista
    distinta de favoritos?
##### `Utilizaría e implementaría una cookie que almacenara este dato en el navegador`

2.- Sin importar si se implementó el módulo de imágenes favoritos explica qué
    tecnologías (AWS, Firebase) podrías utilizar para que un usuario pueda
    tener una lista de favoritos que pueda llevar a distintas sesiones de
    navegador (por ejemplo, si abre hoy en una computadora y mañana en
    otra, que la lista de favoritos de ese usuario sea igual)
##### `Optaría por utilizar firebase e implementar un manejo de sesiones`

3.- ¿Qué recomendaciones de SEO harías para que tu app sea un éxito en los
    buscadores?
    
##### `1.- Implementar Isomorphic React o Javascript Universal pues si se detecta que JavaScript está deshabilitado en el lado del cliente, Isomorphic JavaScript, también llamado Javascript Universal, se ejecuta en el lado del servidor y envía el contenido final al cliente. De esta manera, todos los archivos, propiedades y contenidos necesarios están disponibles cuando se carga la página. En el caso caso que JavaScript está habilitado, funciona como una aplicación dinámica con múltiples componentes. Los beneficios son claros: una carga más rápida comparado con webs tradicionales, más compatibilidad con navegadores más antiguos y diferentes rastreadores y una mayor experiencia de usuario (UX).`
##### `2.- Evitar colocar contenido importante detrás de un evento de JavaScript. Es posible que Google no siga los eventos «onclick» de ningún sitio. No se debe de usar los eventos onclick de JavaScript como un reemplazo para los enlaces internos.`
##### `3.- Generar e implementar el título y las etiquetas meta / head es complejo en React js. Se debe definir esas etiquetas dentro del componente y moverlos en el HEAD del documento tanto del lado del cliente como del servidor.`
