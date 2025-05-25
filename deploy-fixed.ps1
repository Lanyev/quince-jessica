# Script mejorado para desplegar a GitHub Pages

# 1. Compilar el proyecto
Write-Host "Compilando el proyecto..." -ForegroundColor Green
npm run build

# 2. Guardar una copia del directorio dist
Write-Host "Haciendo copia de seguridad de los archivos compilados..." -ForegroundColor Green
Remove-Item -Path ".\dist-backup" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path ".\dist" -Destination ".\dist-backup" -Recurse -Force

# 3. Cambiar a la rama gh-pages
Write-Host "Cambiando a la rama gh-pages..." -ForegroundColor Green
git checkout gh-pages

# 4. Eliminar archivos anteriores (pero conservar .git)
Write-Host "Limpiando archivos antiguos..." -ForegroundColor Green
Get-ChildItem -Path .\ -Exclude .git,deploy-fixed.ps1,verify-deploy.ps1 | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# 5. Copiar todos los archivos compilados de la copia de seguridad
Write-Host "Copiando archivos compilados..." -ForegroundColor Green
Copy-Item -Path ".\dist-backup\*" -Destination ".\" -Recurse -Force

# 6. Verificar que los archivos importantes existen
Write-Host "Verificando archivos críticos..." -ForegroundColor Green
$criticalFiles = @(".\index.html", ".\assets", ".\audio\background-music.mp3")
$error = $false

foreach ($file in $criticalFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "¡ERROR! No se encontró archivo crítico: $file" -ForegroundColor Red
        $error = $true
    } else {
        Write-Host "✓ Verificado: $file" -ForegroundColor Green
    }
}

if ($error) {
    $continue = Read-Host -Prompt "Se encontraron errores. ¿Deseas continuar con el despliegue? (s/n)"
    if ($continue -ne "s") {
        Write-Host "Despliegue cancelado por el usuario." -ForegroundColor Yellow
        git checkout main
        exit
    }
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

# 10. Volver a la rama principal
Write-Host "Volviendo a la rama principal..." -ForegroundColor Green
git checkout main

Write-Host "¡Despliegue completado! Visita https://lanyev.github.io/quince-jessica/ en unos minutos." -ForegroundColor Cyan
Write-Host "Para verificar el audio, visita https://lanyev.github.io/quince-jessica/audio-check.html" -ForegroundColor Magenta
