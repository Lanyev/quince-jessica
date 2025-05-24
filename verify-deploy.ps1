# Verificación de Despliegue - GitHub Pages
# Este script comprueba que los archivos necesarios estén presentes en el despliegue

Write-Host "Verificando archivos después del despliegue..." -ForegroundColor Green

# Comprobar archivos críticos
$criticalFiles = @(
    ".\index.html",
    ".\audio\background-music.mp3",
    ".\assets"
)

$allFound = $true

foreach ($file in $criticalFiles) {
    if (Test-Path $file) {
        Write-Host "✅ Archivo encontrado: $file" -ForegroundColor Green
    } else {
        Write-Host "❌ Archivo NO encontrado: $file" -ForegroundColor Red
        $allFound = $false
    }
}

# Verificar audio específicamente
if (Test-Path ".\audio\background-music.mp3") {
    Write-Host "Información del archivo de audio:" -ForegroundColor Cyan
    Get-Item ".\audio\background-music.mp3" | Select-Object Name, Length, LastWriteTime | Format-List
} else {
    Write-Host "⚠️ No se pudo encontrar el archivo de audio" -ForegroundColor Yellow
}

# Verificar base en vite.config.js
if (Test-Path ".\vite.config.js") {
    $viteConfig = Get-Content ".\vite.config.js" -Raw
    if ($viteConfig -match "base:\s*['\"]\./['\"]\s*,") {
        Write-Host "✅ Configuración base correcta en vite.config.js" -ForegroundColor Green
    } else {
        Write-Host "❓ No se encontró 'base: './',' en vite.config.js" -ForegroundColor Yellow
    }
} else {
    Write-Host "❓ No se encontró vite.config.js" -ForegroundColor Yellow
}

# Resultado final
if ($allFound) {
    Write-Host "`n✅ Todos los archivos críticos están presentes" -ForegroundColor Green
} else {
    Write-Host "`n⚠️ Faltan algunos archivos críticos" -ForegroundColor Yellow
}

Write-Host "`nRecuerda visitar audio-check.html para verificar el audio en el navegador"
