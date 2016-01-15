# AppCozumel
## Secciones
- Servicios turísticos
  - ? Ferry pasajeros
  - ? Ferry carga
  - Taxi aereo
  - Aeropuerto
  - hoteles
  - ✓ agencias **listo**
  - ✓ rentadoras **listo**
  - ✓ bancos **listo**
  - ✓ restaurantes
  - ✓ tours  

- Atracciones turísticas
  - ✓ playas
  - ? arrecifes
  - ✓ parques y museos
  - ✓ Otras atracciones

- ✓ Eventos y espectculos
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
- Tipo de cambio
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
- ✓ Mapa
- ✓ Historia, cultura y turismo

## Bonus
- Fuzzy finder

## Instalación
- Instalar/Actualizar Java: [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Instalar apache ant [http://ant.apache.org/bindownload.cgi](http://ant.apache.org/bindownload.cgi) (Importante agregar path a las variables de entorno)
- Descargar Librerías de desarrollo para la plataforma deseada ([SDK Android](http://developer.android.com/sdk/index.html#download))
- Instalar versión LTS de NodeJS: [http://nodejs.org](http://nodejs.org)
- instalar cordova: abrir terminal y ejecutar el comando: npm install -g cordova
- Instalar ionic: abrir terminal y ejecutar el comando: npm install -g ionic

## Desarrollo
- Linux: export ANDROID_HOME="/home/cedric/Android/Sdk"
  - Instalar SDK /home/cedric/Android/Sdk/tools/android
  - Instalar Emuladores /home/cedric/Android/Sdk/tools/android avd

- Windows: Agregar ruta del SDK a las variables de entorno
- Correr server local y ver cambios en tiempo real: ionic serve

## Pasos para compilar la aplicacinón
- Agregar plataforma deseada: ionic platform android|ios|blackberry
- Compilar: ionic build
- Correr aplicación en un emulador: ionic emulate
- Correr la aplicación en el dispositivo que esté conectado ionic run --device

### ver dispositivos
- adb devices
- sudo adb kill-server and then sudo adb start-server
