# Caso de prueba para presentación GAP MISUM

## Ejecutar con Docker

```bash
docker run --rm -v $(pwd):/app -it node:latest bash
```

## Scripts con npm

```bash
cd /app
npm install

npm run area
npm run functional
npm run test:cucumber
npm run test:jest
npm run test:jest:coverage
```

## Ver coverage

Abrir el archivo `coverage/lcov-report/index.html` en un navegador (doble click desde el explorador de ficheros del sistema).
