@echo off
setlocal
cd /d "%~dp0"
title PC LAB 3D - Real 3D Launcher
color 0A

echo ============================================================
echo              PC LAB 3D - REAL 3D TEST
echo ============================================================
echo.

echo [1/4] Elegxos Node.js kai npm...
where node >nul 2>&1 || goto NONODE
where npm >nul 2>&1 || goto NONPM
node --version
call npm --version
if errorlevel 1 goto NONPM

echo.
echo [2/4] Elegxos vivliothikon...
if exist "node_modules\.bin\vite.cmd" goto DEPS_OK

echo Ginetai npm install. Tin proti fora mporei na parei ligo xrono.
echo Min kleiseis auto to parathyro.
call npm install --no-audit --no-fund > npm-install.log 2>&1
if errorlevel 1 goto INSTALL_ERROR
if not exist "node_modules\.bin\vite.cmd" goto INSTALL_ERROR

:DEPS_OK
echo OK - oi vivliothikes einai etoimes.
echo.
echo [3/4] Ekkinisi tou pragmatikou 3D server...
if exist vite-server.log del /q vite-server.log >nul 2>&1
start "PC LAB 3D VITE" /b cmd /c "call npm run dev -- --host 127.0.0.1 > vite-server.log 2>&1"

echo.
echo [4/4] Perimeno na einai etoimo to http://127.0.0.1:5173/
set /a tries=0
:WAIT
set /a tries+=1
powershell -NoProfile -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:5173/' -TimeoutSec 2; if($r.StatusCode -ge 200 -and $r.StatusCode -lt 500){exit 0}else{exit 1} } catch { exit 1 }" >nul 2>&1
if not errorlevel 1 goto READY
if %tries% GEQ 60 goto SERVER_ERROR
<nul set /p="."
timeout /t 1 /nobreak >nul
goto WAIT

:READY
echo.
echo.
echo ============================================================
echo  ETOIMO! Anoigo to PC LAB 3D ston browser.
echo ============================================================
start "" "http://127.0.0.1:5173/"
echo.
echo Kratise auto to parathyro anoikto oso dokimazeis to 3D.
echo Gia termatismo, kleise to parathyro kai to VITE parathyro an yparxei.
pause
exit /b 0

:NONODE
color 0C
echo.
echo [SFALMA] Den vrethike Node.js.
echo Egkatastise Node.js LTS kai xanatrexe auto to arxeio.
pause
exit /b 1

:NONPM
color 0C
echo.
echo [SFALMA] Den vrethike/den leitourgei to npm.
echo Kleise kai xananoixe ta parathyra meta tin egkatastasi Node.js.
pause
exit /b 1

:INSTALL_ERROR
color 0C
echo.
echo ============================================================
echo [SFALMA] To npm install DEN oloklirothike.
echo ============================================================
echo.
echo Teleutaies grammes tou npm-install.log:
echo ------------------------------------------------------------
powershell -NoProfile -Command "if(Test-Path 'npm-install.log'){Get-Content 'npm-install.log' -Tail 45}else{Write-Host 'Den vrethike npm-install.log'}"
echo ------------------------------------------------------------
echo.
echo Steile mou screenshot AYTOY tou parathyrou.
pause
exit /b 1

:SERVER_ERROR
color 0C
echo.
echo ============================================================
echo [SFALMA] O 3D server den apantise sti thyra 5173.
echo ============================================================
echo.
echo Teleutaies grammes tou vite-server.log:
echo ------------------------------------------------------------
powershell -NoProfile -Command "if(Test-Path 'vite-server.log'){Get-Content 'vite-server.log' -Tail 45}else{Write-Host 'Den vrethike vite-server.log'}"
echo ------------------------------------------------------------
echo.
echo Steile mou screenshot AYTOY tou parathyrou.
pause
exit /b 1
