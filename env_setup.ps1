# urls de instalacion
$pythonUrl = "https://www.python.org/ftp/python/3.12.6/python-3.12.6-amd64.exe"
$nodeUrl = "https://nodejs.org/dist/v22.8.0/node-v22.8.0-win-x64.zip"
$gitUrl = "https://github.com/git-for-windows/git/releases/download/v2.46.0.windows.1/PortableGit-2.46.0-64-bit.7z.exe"

# location
$installPath = "$env:LOCALAPPDATA\DevTools"

# compilers
$pythonPath = "$installPath\Python"
$nodePath = "$installPath\Node"
$gitPath = "$installPath\PortableGit"

# creación de directorios de instalación
New-Item -Path $installPath -ItemType Directory -Force

# node
Write-Output "Descargando Node.js..."
Invoke-WebRequest -Uri $nodeUrl -OutFile "$installPath\node.zip"
Write-Output "Extracting Node.js..."
Expand-Archive -Path "$installPath\node.zip" -Force -DestinationPath "$installPath\Node"
Remove-Item "$installPath\node.zip"

# git
Write-Output "Descargando Git..."
Invoke-WebRequest -Uri $gitUrl -OutFile "$installPath\git-installer.exe"
Write-Output "Please follow the prompts to install Git..."
Start-Process -FilePath "$installPath\git-installer.exe" -Wait
Remove-Item "$installPath\git-installer.exe"

# python
Write-Output "Descargando Python..."
Invoke-WebRequest -Uri $pythonUrl -OutFile "$installPath\python-installer.exe"
Write-Output "Please follow the prompts to install Python..."
Start-Process -FilePath "$installPath\python-installer.exe" -Wait
Remove-Item "$installPath\python-installer.exe"

# ===

# Actualizar variables de entorno
Write-Output "Actualizando variables de entorno..."
$envPath = [System.Environment]::GetEnvironmentVariable('Path', [System.EnvironmentVariableTarget]::User)
$envPath += ";${nodePath}\node-v22.8.0-win-x64;${gitPath}\bin"
[System.Environment]::SetEnvironmentVariable('Path', $envPath, [System.EnvironmentVariableTarget]::User)

# git aliases
Write-Output "Iniciando Git-Zsh aliases... (https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index)"
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Install-Module git-aliases -Scope CurrentUser -AllowClobber

# vscode extensions
code --install-extension ms-python.python
code --install-extension usernamehw.errorlens
code --install-extension GitHub.github-vscode-theme
code --install-extension PKief.material-icon-theme
code --install-extension Prisma.prisma
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension stivo.tailwind-fold
code --install-extension Dart-Code.flutter

# git in powershell
PowerShellGet\Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force -AllowClobber
Add-PoshGitToProfile

Write-Output "¡Instalación completa!"
