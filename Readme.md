# Cozumel
## TODO
- ✓ Splash
- ✓ Icono
- Google Developer Console
- Temario

## Secciones
- Servicios turísticos
  - ? Ferry
  - ? puente
  - ? aeropuerto
  - hoteles
  - ✓ spas
  - ✓ agencias
  - ✓ rentadoras
  - ✓ bancos
  - ✓ restaurantes
  - ✓ tours  

- Atracciones turísticas
  - ✓ playas
  - ? arrecifes
  - ✓ parques y museos  
  - ? sitios de interés
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

- ? Atención ciudadana  
- ✓ Atención turística
  - ✓ DIRECCION DE TURISMO
  - ✓ MIGRACIÓN
  - ✓ PROFECO
  - ✓ ASOCIACION DE HOTELES
  - ✓ S.R.E.

- ✓ Servicios de emergencia
  - ✓ Emergencia
  - ✓ Seguridad Publica
  - ✓ Bomberos
  - ✓ Cruz Roja
  - ✓ Protección Civil
  - ✓ Dirección de Turismo
  - ✓ Agencia Consignataria TMM
  - ✓ Agencia Consignataria Aconsur
  - ? Bienvenido → Choro

- ✓ Bienvenida
- ✓ Cozumel → [http://cozumel.gob.mx](http://cozumel.gob.mx)
- ✓ Mapa
- ✓ Historia

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

### ver dispositivos
- adb devices
- sudo adb kill-server and then sudo adb start-server
