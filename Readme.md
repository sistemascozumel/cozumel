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
  - ✓ arrecifes
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

- Clima
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
- Una vez descargado e instalado el archivo anterior abrir el gestor de paquetes y descargar los SDK especficos de las versiones de android que se quiera soportar.
- Instalar versión LTS de NodeJS: [Página oficial](http://nodejs.org) y aregar variable de entorno (C:\Program Files\nodejs\bin.)
- instalar cordova: abrir terminal y ejecutar el comando: npm install -g cordova
- Instalar ionic: abrir terminal y ejecutar el comando: npm install -g ionic

### Android
- Para el caso de Android descargar el SDK (No es necesario descargar Android Studio, ya que ese es el IDE para desarrollo en Java) [SDK Android](http://developer.android.com/sdk/index.html#download)). Agregar las variables de entorno de "adt-bundle/sdk/platform-tools/" y () "adt-bundle/sdk/tools/"
- [Documentación de Ionic](http://learn.ionicframework.com/videos/windows-android/)
- [Video tutorial para Android](https://www.youtube.com/watch?v=RNrNIHQ9cWo)

### iOS
- Instalar XCode para tener acceso a los SDK y emuladores de iOS
- Instalar simulador de ios: npm install -g ios-sim
- [Video tutorial](https://www.youtube.com/watch?v=1RQCjwnlTRk)

## Desarrollo Linux
- Linux: export ANDROID_HOME="/home/cedric/Android/Sdk"
- Instalar SDK /home/cedric/Android/Sdk/tools/android
- Instalar Emuladores /home/cedric/Android/Sdk/tools/android avd
- Windows: Agregar ruta del SDK a las variables de entorno
- Correr server local y ver cambios en tiempo real: ionic serve

## Compilar la aplicación / Generar archivo para tiendas
- Navegar hasta el directorio donde esté alojada la aplicación
- Agregar plataforma deseada: ionic platform android|ios
- Compilar/empaquetar aplicación para instalarla en un celular o subirla a las tiendas: ionic build . La ruta al archivo ejecutable estará indicada al terminal la ejecución del comando, para el caso de Android será un archivo android-debug.apk, para el caso de iOS será un ios-debug.app
- Correr aplicación en un emulador: ionic emulate, esto generará un dispositivo virtual en el que se instalará una versión idéntica a la que se genera al correr el comando ionic build
- Correr la aplicación en el dispositivo que esté conectado ionic run --device

### ver dispositivos android conectados
- adb devices
- En el caso de que no detecte ningun dipositivo reiniciar el server con: sudo adb kill-server and then sudo adb start-server
