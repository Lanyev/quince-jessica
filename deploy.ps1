# Script para desplegar a GitHub Pages

# 1. Compilar el proyecto
Write-Host "Compilando el proyecto..." -ForegroundColor Green
npm run build

# 2. Cambiar a la rama gh-pages
Write-Host "Cambiando a la rama gh-pages..." -ForegroundColor Green
git checkout gh-pages

# 3. Eliminar archivos anteriores (excepto carpeta dist y .git)
Write-Host "Limpiando archivos antiguos..." -ForegroundColor Green
Get-ChildItem -Path .\ -Exclude .git,dist,deploy.ps1 | Remove-Item -Recurse -Force

# 4. Copiar los archivos compilados
Write-Host "Copiando archivos compilados..." -ForegroundColor Green
Copy-Item -Path .\dist\* -Destination .\ -Recurse -Force

# 5. Crear carpeta assets si no existe
Write-Host "Asegurando que exista la carpeta assets..." -ForegroundColor Green
New-Item -ItemType Directory -Path .\assets -Force
Copy-Item -Path .\dist\assets\* -Destination .\assets\ -Recurse -Force

# 6. Asegurarse de que la carpeta audio esté copiada correctamente
Write-Host "Verificando la carpeta audio y archivos críticos..." -ForegroundColor Green
if (Test-Path -Path .\dist\audio) {
    Write-Host "Copiando carpeta audio..." -ForegroundColor Green
    Copy-Item -Path .\dist\audio -Destination .\ -Recurse -Force
} else {
    Write-Host "¡ADVERTENCIA! No se encontró la carpeta audio en dist" -ForegroundColor Yellow
}

# Copiar herramientas de diagnóstico
if (Test-Path -Path .\dist\audio-check.html) {
    Write-Host "Copiando herramienta de diagnóstico de audio..." -ForegroundColor Green
    Copy-Item -Path .\dist\audio-check.html -Destination .\ -Force
}

# 7. Añadir cambios a git
Write-Host "Añadiendo cambios a git..." -ForegroundColor Green
git add .

# 8. Commit con fecha y hora
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Creando commit..." -ForegroundColor Green
git commit -m "Actualización de GitHub Pages - $timestamp"

# 9. Subir a GitHub
Write-Host "Subiendo a GitHub..." -ForegroundColor Green
git push origin gh-pages

# 10. Verificar archivos críticos
Write-Host "Verificando archivos críticos en el despliegue..." -ForegroundColor Green
.\verify-deploy.ps1

# 11. Volver a la rama principal
Write-Host "Volviendo a la rama principal..." -ForegroundColor Green
git checkout main

Write-Host "¡Despliegue completado! Visita https://lanyev.github.io/quince-jessica/ en unos minutos." -ForegroundColor Cyan
Write-Host "Para verificar el audio, visita https://lanyev.github.io/quince-jessica/audio-check.html" -ForegroundColor Magenta
