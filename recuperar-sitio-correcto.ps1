# Script CORRECTO para desplegar a GitHub Pages
# Este script despliega correctamente el sitio, sin eliminar archivos innecesariamente

# 1. Compilar el proyecto
Write-Host "Compilando el proyecto..." -ForegroundColor Green
npm run build

# 2. Verificar que la compilación fue exitosa
if (-not (Test-Path -Path .\dist\index.html)) {
    Write-Host "❌ La compilación del proyecto falló. No se encontró dist/index.html" -ForegroundColor Red
    exit
}

# 3. Crear una rama temporal para el despliegue
$tempBranch = "temp-deploy-$(Get-Date -Format 'yyyyMMddHHmmss')"
Write-Host "Creando rama temporal: $tempBranch..." -ForegroundColor Cyan
git checkout -b $tempBranch

# 4. Cambiar a la rama gh-pages
Write-Host "Cambiando a la rama gh-pages..." -ForegroundColor Green
git checkout gh-pages

# 5. Guardar archivos importantes que no queremos perder
Write-Host "Respaldando archivos importantes..." -ForegroundColor Yellow
if (Test-Path -Path .git) {
    Write-Host "✓ Preservando directorio .git" -ForegroundColor Green
} else {
    Write-Host "⚠️ No se encontró directorio .git" -ForegroundColor Red
    exit
}

# 6. Limpiar archivos en gh-pages (preservando .git y scripts importantes)
Write-Host "Limpiando archivos en gh-pages..." -ForegroundColor Cyan
Get-ChildItem -Path .\ -Exclude .git,recuperar-sitio.ps1,recuperar-sitio-correcto.ps1 | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# 7. Copiar archivos de dist a la raíz de gh-pages
Write-Host "Copiando archivos de dist..." -ForegroundColor Green
Copy-Item -Path .\dist\* -Destination .\ -Recurse -Force

# 8. Verificar que los archivos críticos existan
Write-Host "Verificando archivos críticos..." -ForegroundColor Yellow
$criticalFiles = @(".\index.html", ".\assets", ".\audio\background-music.mp3")
$error = $false

foreach ($file in $criticalFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "❌ No se encontró archivo crítico: $file" -ForegroundColor Red
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

# 9. Añadir cambios a git
Write-Host "Añadiendo cambios a git..." -ForegroundColor Green
git add .

# 10. Commit con fecha y hora
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Creando commit..." -ForegroundColor Green
git commit -m "Actualización de GitHub Pages - $timestamp"

# 11. Subir a GitHub
Write-Host "Subiendo a GitHub..." -ForegroundColor Green
git push origin gh-pages

# 12. Volver a la rama principal
Write-Host "Volviendo a la rama principal..." -ForegroundColor Green
git checkout main

# 13. Eliminar la rama temporal
Write-Host "Eliminando rama temporal..." -ForegroundColor Cyan
git branch -D $tempBranch

Write-Host "`n✅ ¡Despliegue completado correctamente!" -ForegroundColor Green
Write-Host "Visita https://lanyev.github.io/quince-jessica/ en unos minutos." -ForegroundColor Cyan
Write-Host "Para verificar el audio, visita https://lanyev.github.io/quince-jessica/diagnostico.html" -ForegroundColor Magenta
