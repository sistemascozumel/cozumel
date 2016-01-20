# AppCozumel
## Secciones
- Servicios turísticos
  - Ferry pasajeros **listo**
  - Ferry carga **listo**
  - Taxi aereo **listo**
  - Aeropuerto **listo**
  - hoteles **listo**
  - ✓ agencias **listo**
  - ✓ rentadoras **listo**
  - ✓ bancos **listo**
  - ✓ restaurantes **listo**

- Atracciones turísticas
  - ✓ playas **listo**
  - ✓ arrecifes **listo**
  - ✓ parques y museos **listo**
  - ✓ Otras atracciones **listo**

- ✓ Eventos y espectáculos **listo**
  - ✓ Carnaval - Febrero
  - ✓ El Cedral - Mayo
  - ✓ Rodeo de lanchas mexicanas - Mayo
  - ✓ Travesia sagrada Maya - Mayo
  - ✓ Independencia de México - Septiembre
  - ✓ Iron man 70.3 Cozumel - Septiembre
  - ✓ ITU World Cup Cozumel 2013 - Octubre
  - ✓ Ironman Cozumel - Diciembre
  - ✓ Scuba Fest - Diciembre

- ✓ Atención turística **listo**
  - ✓ DIRECCION DE TURISMO
  - ✓ MIGRACIÓN
  - ✓ PROFECO
  - ✓ ASOCIACION DE HOTELES
  - ✓ S.R.E.

- Clima **listo**
- Tipo de cambio **listo**
- ✓ Servicios de emergencia **listo**
  - ✓ Emergencia
  - ✓ Seguridad Publica
  - ✓ Bomberos
  - ✓ Cruz Roja
  - ✓ Protección Civil
  - ✓ Dirección de Turismo
  - ✓ Agencia Consignataria TMM
  - ✓ Agencia Consignataria Aconsur
  - ? Bienvenido → Choro

- ✓ Bienvenida **listo**
- ✓ Cozumel → [http://cozumel.gob.mx](http://cozumel.gob.mx) **listo**
- ✓ Mapa **listo**
- ✓ Historia, cultura y ecología **listo**

## Entrega
- Aprobación de la interfaz
- Aprobación del Contenido
- Entrega del Código fuente
- Capacitación al área de sistemas
- Cuentas de las tiendas
  - PlayStore
  - AppStore

## Instalación (Android y iOS)
- Instalar/Actualizar Java: [link](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Instalar apache ant [Apache Ant](http://ant.apache.org/bindownload.cgi) (Importante agregar path a /bin a las variables de entorno)
- Instalar versión LTS de NodeJS: [Página oficial](http://nodejs.org) y aregar variable de entorno (C:\Program Files\nodejs\bin.)
- Al terminar de instalar node se debe verificar que esté disponible en terminal, abrir una linea de comandos y ejecutar: npm -v lo anterior nos deberá mostrar la versión instalada del Node Package Manager.
- instalar cordova: abrir terminal y ejecutar el comando: npm install -g cordova
- Instalar ionic: abrir terminal y ejecutar el comando: npm install -g ionic

### Android
- Para el caso de Android descargar el SDK (No es necesario descargar Android Studio, ya que ese es el IDE para desarrollo en Java) [SDK Android](http://developer.android.com/sdk/index.html#Other)).
- Seleccionar el instalador de windows, aceptar los términos y condiciones y presionar botón de descarga.
- Instalar el paquete descargado, y posteriormente Agregar las variables de entorno de "adt-bundle/sdk/platform-tools/" y "adt-bundle/sdk/tools/"
- Una vez descargado e instalado el archivo anterior abrir el gestor de paquetes y descargar los SDK especficos de las versiones de android que se quiera soportar.
- Solo se requieren los SDK (omitir sdk samples) y los emuladores (ARM e intel), Seleccionarlos y presionar "Instalar X paquetes"
- Aceptar los términos y condiciones
- [Documentación de Ionic](http://learn.ionicframework.com/videos/windows-android/)
- [Video tutorial para Android](https://www.youtube.com/watch?v=RNrNIHQ9cWo)

### iOS
- Instalar XCode para tener acceso a los SDK y emuladores de iOS
- Instalar simulador de ios: npm install -g ios-sim
- [Video tutorial](https://www.youtube.com/watch?v=1RQCjwnlTRk)

## Desarrollo
- Abrir linea de comandos (Ejecutar CMD)
- Navegar a la carpeta donde se quiera guardar la aplicación (cd C:/ruta/deseada)
- Clonar el repositorio (esto descargará el código):

```
git clone https://github.com/uncedric/cozumel.git
```

- Entrar a la carpeta recién creada: cd cozumel
- Correr la aplicación en modo de desarrollo (se abrirá el navegador por defecto): ionic serve
- Al hacer modificaciones en el código fuente la página abierta ([http://localhost:8100](http://localhost:8100)) se actualizará automáticamente

## Modificar contenido de la aplicación
- La aplicación está dividida en módulos pequeños para facilitar las modificaciones al código fuente, algunos ejemplos de módulos son: hoteles, agencias, rentadoras, restaurantes, clima, etc. Dichos módulos están contenidos en la carpeta www/scripts/
- Seleccionar el módulo a modificar, ejemplo: se quiere agregar un nuevo restaurante
- Identificar la ruta de la carpeta, nos podemos basar en el nombre del módulo para identificarla, por ejemplo: www/scripts/restaurantes/
- Cada módulo usualmente contiene tres archivos, uno es la vista (restaurantes.html), otro es el controlador (restaurantes.controller.js) y el tercero es la "base de datos" que es un archivo en formato .json (db.json)
- El formato para el archivo .json debe tener a grandes rasgos las siguientes propiedades:

```
[
  {
    "nombre":"restaurante1",
    "direccion":"valor21"
  },
  {
    "nombre":"restaurante2",
    "direccion":"valor2"
  }
]
```

- Hacer las modificaciones necesarias, es importante cuidar que la sintaxis del archivo db.json sea correcta, es posible hacer la verificación en busca de errores en el siguiente link [Json Linter](http://jsonlint.com/)
- Para el caso de imagenes es posibe poner rutas locales (img/restaurante/foto.png) o rutas absolutas que salgan del server del ayuntamiento (o cualquier otro), ejemplo: [http://app.cozumel.gob.mx/restaurantes/foto.jpg](http://app.cozumel.gob.mx/restaurantes/foto.jpg)
- Guardar los cambios y veriicar que funcionen correctamente en  [http://localhost:8100](http://localhost:8100)

## Desarrollo Linux
- Linux: export ANDROID_HOME="/home/cedric/Android/Sdk"
- Instalar SDK /home/cedric/Android/Sdk/tools/android
- Instalar Emuladores /home/cedric/Android/Sdk/tools/android avd
- Windows: Agregar ruta del SDK a las variables de entorno
- Correr server local y ver cambios en tiempo real: ionic serve
- Ver dispositivos android conectados adb devices
- En el caso de que no detecte ningun dipositivo reiniciar el server con: sudo adb kill-server and then sudo adb start-server

## Compilar la aplicación / Generar archivo para tiendas
- Navegar hasta el directorio donde esté alojada la aplicación
- Agregar plataforma deseada: ionic platform android|ios
- Compilar/empaquetar aplicación para instalarla en un celular o subirla a las tiendas: ionic build . La ruta al archivo ejecutable estará indicada al terminal la ejecución del comando, para el caso de Android será un archivo android-debug.apk, para el caso de iOS será un ios-debug.app
- Correr aplicación en un emulador: ionic emulate, esto generará un dispositivo virtual en el que se instalará una versión idéntica a la que se genera al correr el comando ionic build
- Correr la aplicación en el dispositivo que esté conectado ionic run --device
