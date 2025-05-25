# Script de RECUPERACIÓN de emergencia para GitHub Pages
# Este script recupera el sitio de una situación crítica

# 1. Compilar el proyecto
Write-Host "Compilando el proyecto..." -ForegroundColor Green
npm run build

# 2. Cambiar a la rama gh-pages
Write-Host "Cambiando a la rama gh-pages..." -ForegroundColor Green
git checkout gh-pages

# 3. Limpiar solo archivos seleccionados (no borrar todo)
Write-Host "Limpiando solo archivos específicos..." -ForegroundColor Cyan
Remove-Item -Path .\*.html -Force -ErrorAction SilentlyContinue
Remove-Item -Path .\assets -Recurse -Force -ErrorAction SilentlyContinue

# 4. Copiar los archivos compilados directamente desde dist
Write-Host "Copiando archivos compilados..." -ForegroundColor Green
Copy-Item -Path .\dist\*.html -Destination .\ -Force
Copy-Item -Path .\dist\assets -Destination .\ -Recurse -Force
Copy-Item -Path .\dist\audio -Destination .\ -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path .\dist\images -Destination .\ -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path .\dist\*.svg -Destination .\ -Force -ErrorAction SilentlyContinue

# 5. Verificación manual
Write-Host "Verificando archivos críticos..." -ForegroundColor Yellow
if (-not (Test-Path -Path .\index.html)) {
    Write-Host "⚠️ ERROR CRÍTICO: No se encontró index.html" -ForegroundColor Red
    $continue = Read-Host -Prompt "¿Continuar de todos modos? (s/n)"
    if ($continue -ne "s") { 
        Write-Host "Operación cancelada" -ForegroundColor Red
        exit 
    }
}

if (-not (Test-Path -Path .\assets)) {
    Write-Host "⚠️ ERROR CRÍTICO: No se encontró carpeta assets" -ForegroundColor Red
}

# 6. Añadir cambios a git
Write-Host "Añadiendo cambios a git..." -ForegroundColor Green
git add .

# 7. Commit con fecha y hora
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Creando commit de recuperación..." -ForegroundColor Green
git commit -m "RECUPERACIÓN DE EMERGENCIA - $timestamp"

# 8. Subir a GitHub
Write-Host "Subiendo a GitHub..." -ForegroundColor Green
git push origin gh-pages

# 9. Volver a la rama principal
Write-Host "Volviendo a la rama principal..." -ForegroundColor Green
git checkout main

Write-Host "¡Recuperación completada! Visita https://lanyev.github.io/quince-jessica/ en unos minutos." -ForegroundColor Magenta
