# Script simplificado para desplegar a GitHub Pages
# Este script compila el proyecto y lo despliega a GitHub Pages

# Colores para mensajes
$colorInfo = "Cyan"
$colorSuccess = "Green" 
$colorWarning = "Yellow"
$colorError = "Red"

# Función para mostrar mensajes con formato
function Write-Log {
    param (
        [string]$Message,
        [string]$Color = "White"
    )
    $timestamp = Get-Date -Format "HH:mm:ss"
    Write-Host "[$timestamp] $Message" -ForegroundColor $Color
}

# Compilar el proyecto
Write-Log "Compilando el proyecto..." $colorInfo
npm run build

if (-not (Test-Path -Path ".\dist")) {
    Write-Log "Error: No se encontró la carpeta dist después de compilar" $colorError
    Write-Log "Verifica que la compilación sea correcta" $colorError
    exit 1
}

# Cambiar a la rama gh-pages
Write-Log "Cambiando a la rama gh-pages..." $colorInfo
$currentBranch = git rev-parse --abbrev-ref HEAD
git checkout -b gh-pages-temp

# Eliminar archivos anteriores (excepto .git y dist)
Write-Log "Limpiando archivos antiguos..." $colorInfo
Get-ChildItem -Path .\ -Exclude .git,dist | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Copiar los archivos compilados
Write-Log "Copiando archivos compilados..." $colorInfo
Copy-Item -Path .\dist\* -Destination .\ -Recurse -Force

# Verificar que index.html exista
if (-not (Test-Path -Path ".\index.html")) {
    Write-Log "Error: No se encontró index.html después de copiar los archivos" $colorError
    Write-Log "Volviendo a la rama original..." $colorInfo
    git checkout $currentBranch
    git branch -D gh-pages-temp
    exit 1
}

# Añadir archivos a git
Write-Log "Añadiendo archivos a git..." $colorInfo
git add .

# Crear commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Log "Creando commit..." $colorInfo
git commit -m "Actualización de GitHub Pages - $timestamp"

# Eliminar rama gh-pages si existe
Write-Log "Preparando rama gh-pages..." $colorInfo
$branches = git branch -a
if ($branches -match "remotes/origin/gh-pages") {
    git push origin --delete gh-pages
}

# Renombrar rama temporal a gh-pages
git branch -m gh-pages-temp gh-pages

# Subir a GitHub
Write-Log "Subiendo a GitHub..." $colorInfo
git push -u origin gh-pages --force

# Volver a la rama original
Write-Log "Volviendo a la rama original..." $colorInfo
git checkout $currentBranch
git branch -D gh-pages

Write-Log "¡Despliegue completado! Tu sitio estará disponible en:" $colorSuccess
Write-Log "https://[tu-usuario-github].github.io/quince-jessica/" $colorSuccess
