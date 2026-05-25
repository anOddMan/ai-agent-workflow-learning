@echo off
chcp 65001 >nul 2>&1
title AI Agent Workflow

echo ============================================
echo   AI Agent Technical Workflow Analysis
echo   Starting development server...
echo ============================================
echo.

if not exist "node_modules" (
    echo [1/2] Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed
        pause
        exit /b 1
    )
    echo [OK] Dependencies installed
    echo.
)

echo [2/2] Starting Vite dev server...
echo.
echo Browser will open automatically when ready.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev -- --open

pause