# Build the React app
Write-Host "Building React app..." -ForegroundColor Green
Set-Location -Path frontend\react-frontend
npm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "React build failed. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host "React build completed successfully!" -ForegroundColor Green
Set-Location -Path ..\..

# Ensure the dist directory exists
if (-not (Test-Path -Path "frontend\react-frontend\dist")) {
    Write-Host "Error: Build directory not found!" -ForegroundColor Red
    exit 1
}

Write-Host "React app is now ready to be served by Flask at /react" -ForegroundColor Green
Write-Host "Run 'python run.py' to start the Flask server" -ForegroundColor Green
