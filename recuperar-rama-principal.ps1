# Script de RECUPERACIÓN de la RAMA PRINCIPAL
# Este script recupera la rama principal después de un error de despliegue

# 1. Verificar si hay cambios no guardados
Write-Host "Verificando cambios locales..." -ForegroundColor Cyan
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️ Tienes cambios sin guardar. Se recomienda guardarlos primero." -ForegroundColor Yellow
    $continue = Read-Host -Prompt "¿Continuar de todos modos? Se perderán los cambios no guardados (s/n)"
    if ($continue -ne "s") { 
        Write-Host "Operación cancelada" -ForegroundColor Red
        exit 
    }
}

# 2. Verificar estado del repositorio
Write-Host "Verificando estado del repositorio remoto..." -ForegroundColor Green
git fetch

# 3. Recuperar la rama principal desde el remoto
Write-Host "Recuperando rama principal desde el repositorio remoto..." -ForegroundColor Cyan
git checkout main
git reset --hard origin/main

# 4. Instalando dependencias
Write-Host "Instalando dependencias..." -ForegroundColor Green
npm install

# 5. Verificando recuperación
Write-Host "Verificando recuperación..." -ForegroundColor Yellow
if (-not (Test-Path -Path .\package.json)) {
    Write-Host "⚠️ No se pudo recuperar el proyecto. El archivo package.json no existe." -ForegroundColor Red
    Write-Host "Por favor, clona nuevamente el repositorio o contacta al administrador." -ForegroundColor Red
} else {
    Write-Host "✅ Recuperación exitosa de la rama principal." -ForegroundColor Green
}

# 6. Instrucciones finales
Write-Host "`n--- INSTRUCCIONES PARA CONTINUAR ---" -ForegroundColor Cyan
Write-Host "1. El proyecto ha sido restaurado a la versión remota." -ForegroundColor White
Write-Host "2. Para reconstruir el proyecto, ejecuta: npm run build" -ForegroundColor White
Write-Host "3. Para arreglar el sitio en GitHub Pages, usa el script: .\recuperar-sitio-correcto.ps1 (que crearemos)" -ForegroundColor White
