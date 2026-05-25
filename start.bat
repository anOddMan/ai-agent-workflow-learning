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

:: 启动开发服务器
echo [2/2] 正在启动开发服务器...
echo.
echo 项目启动后，请访问: http://localhost:5173
echo 按 Ctrl+C 可停止服务器
echo.

:: 启动 Vite 并自动打开浏览器
start "" http://localhost:5173
call npm run dev

pause