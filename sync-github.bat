@echo off
chcp 65001 >nul
title AI Agent Workflow - 同步到 GitHub

echo ============================================
echo   同步本地代码到 GitHub
echo ============================================
echo.

cd /d "%~dp0"

:: 检查是否有未提交的更改
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    git diff-index --quiet HEAD --
    if %errorlevel% equ 0 (
        echo [提示] 没有本地更改，直接拉取远程更新...
        git pull origin main
        echo.
        echo [完成] 同步完成！
        pause
        exit /b 0
    )
)

:: 有更改，先提交再推送
echo [Step 1] 查看本地更改...
git status
echo.

echo [Step 2] 添加所有更改到暂存区...
git add .
echo.

echo [Step 3] 请输入提交信息（或直接回车使用默认信息）:
set /p commit_msg="提交信息: "
if "%commit_msg%"=="" set commit_msg=Update: 本地更改同步

git commit -m "%commit_msg%"
echo.

echo [Step 4] 拉取远程最新代码...
git pull origin main
echo.

echo [Step 5] 推送到 GitHub...
git push origin main
echo.

echo ============================================
echo   [完成] 同步成功！
echo   仓库地址: https://github.com/anOddMan/ai-agent-workflow-learning
echo ============================================
pause