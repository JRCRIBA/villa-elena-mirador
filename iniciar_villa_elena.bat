@echo off
title Villa Elena Mirador & Eco-Resort
chcp 65001 >nul
cls

echo ==============================================================================
echo                 VILLA ELENA MIRADOR ^& ECO-RESORT (PAIPA)
echo           Glamping, Astro-Turismo ^& Experiencias de Bienestar
echo ==============================================================================
echo.
echo [1/2] Verificando entorno de ejecucion...
where python >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [2/2] Iniciando servidor local en segundo plano...
    start "" python "%~dp0servidor.py"
    echo.
    echo Servidor iniciado correctamente. El navegador se abrira en unos segundos.
    echo Puedes cerrar esta ventana sin detener la aplicacion.
) else (
    echo [2/2] Python no detectado en el PATH. Abriendo directamente en el navegador...
    start "" "%~dp0index.html"
)

echo.
timeout /t 3 >nul
exit
