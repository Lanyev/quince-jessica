# Verificación de Despliegue - GitHub Pages
# Este script comprueba que los archivos necesarios estén presentes en el despliegue

# Colores para mensajes
$colorInfo = "Cyan"
$colorSuccess = "Green" 
$colorWarning = "Yellow"
$colorError = "Red"

function Write-Header {
    param (
        [string]$Message,
        [string]$Color = $colorInfo
    )
    Write-Host "`n=== $Message ===" -ForegroundColor $Color
}

# Iniciar verificación
Write-Header "VERIFICACIÓN DE ARCHIVOS DESPUÉS DEL DESPLIEGUE" $colorInfo

# Comprobar archivos críticos
$criticalFiles = @(
    @{Path = ".\index.html"; Description = "Archivo principal HTML"},
    @{Path = ".\audio\background-music.mp3"; Description = "Archivo de música de fondo"},
    @{Path = ".\assets"; Description = "Carpeta de assets de Vite"},
    @{Path = ".\diagnostico.html"; Description = "Herramienta de diagnóstico"},
    @{Path = ".\audio-check.html"; Description = "Verificador de audio"}
)

$allFound = $true
$foundItems = 0
$totalItems = $criticalFiles.Count

Write-Host "Verificando archivos críticos ($totalItems):" -ForegroundColor $colorInfo

foreach ($file in $criticalFiles) {
    if (Test-Path $file.Path) {
        Write-Host "✅ ($($file.Description)): $($file.Path)" -ForegroundColor $colorSuccess
        $foundItems++
    } else {
        Write-Host "❌ FALTA ($($file.Description)): $($file.Path)" -ForegroundColor $colorError
        $allFound = $false
    }
}

# Verificar audio específicamente
Write-Header "DETALLES DE AUDIO"

if (Test-Path ".\audio\background-music.mp3") {
    Write-Host "Información del archivo de audio:" -ForegroundColor $colorInfo
    $audioFile = Get-Item ".\audio\background-music.mp3"
    
    $sizeKB = [math]::Round($audioFile.Length / 1KB, 2)
    
    Write-Host "  Nombre: $($audioFile.Name)" -ForegroundColor $colorSuccess
    Write-Host "  Tamaño: $sizeKB KB" -ForegroundColor $colorSuccess
    Write-Host "  Última modificación: $($audioFile.LastWriteTime)" -ForegroundColor $colorSuccess
    
    # Verificar que el archivo no esté vacío
    if ($audioFile.Length -eq 0) {
        Write-Host "⚠️ ADVERTENCIA: El archivo de audio está vacío (0 KB)" -ForegroundColor $colorWarning
        $allFound = $false
    }
} else {
    Write-Host "⚠️ No se pudo encontrar el archivo de audio" -ForegroundColor $colorWarning
}

# Verificar base en vite.config.js
Write-Header "VERIFICACIÓN DE CONFIGURACIÓN"

if (Test-Path ".\index.html") {
    $indexContent = Get-Content ".\index.html" -Raw
    
    # Verificar referencias a assets con rutas relativas
    Write-Host "Verificando referencias en index.html:" -ForegroundColor $colorInfo
    
    if ($indexContent -match "src=\""./assets") {
        Write-Host "✅ Referencias a assets usan rutas relativas" -ForegroundColor $colorSuccess
    } else {
        Write-Host "⚠️ Las referencias a assets podrían no usar rutas relativas" -ForegroundColor $colorWarning
    }
}

# Resultado final
Write-Header "RESUMEN FINAL"

$percentComplete = [math]::Round(($foundItems / $totalItems) * 100)

if ($allFound) {
    Write-Host "✅ Todos los archivos críticos están presentes ($foundItems de $totalItems, $percentComplete%)" -ForegroundColor $colorSuccess
} else {
    Write-Host "⚠️ Faltan algunos archivos críticos ($foundItems de $totalItems, $percentComplete%)" -ForegroundColor $colorWarning
}

Write-Host "`n📌 INSTRUCCIONES:" -ForegroundColor $colorInfo
Write-Host "  1. Visita https://[tu-usuario].github.io/quince-jessica/" -ForegroundColor $colorInfo
Write-Host "  2. Prueba https://[tu-usuario].github.io/quince-jessica/diagnostico.html para verificar el audio" -ForegroundColor $colorInfo
Write-Host "  3. Si hay problemas, revisa el README.md para soluciones" -ForegroundColor $colorInfo
