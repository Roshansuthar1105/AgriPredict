# Start React development server in a new PowerShell window
Write-Host "Starting React development server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location -Path '$PWD\frontend\react-frontend'; npm run dev"

# Wait a moment for the React server to start
Start-Sleep -Seconds 2

# Start Flask backend
Write-Host "Starting Flask backend..." -ForegroundColor Green
python run.py
