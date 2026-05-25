@echo off
chcp 65001 >nul
title AI Agent 流程解析 - 启动服务器

echo ============================================
echo   AI Agent 底层业务流程全解析
echo   正在启动项目...
echo ============================================
echo.

:: 检查 node_modules 是否存在
if not exist "node_modules" (
    echo [1/2] 首次运行，正在安装依赖...
    call npm install
    if errorlevel 1 (
        echo.
        echo [错误] npm install 失败，请检查 Node.js 是否已安装
        pause
        exit /b 1
    )
    echo [完成] 依赖安装成功
    echo.
)

:: 启动开发服务器（使用 --host 参数便于访问）
echo [2/2] 正在启动开发服务器...
echo.
echo 项目启动后，浏览器将自动打开
echo 按 Ctrl+C 可停止服务器
echo.

:: 使用 start 在新窗口启动服务器，便于后续操作
start "Vite Dev Server" cmd /k "npm run dev -- --open"

:: 等待服务器启动（约3秒）
timeout /t 3 /nobreak >nul

echo.
echo [完成] 开发服务器已启动，浏览器即将打开...
echo.
pause