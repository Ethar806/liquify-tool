const { app } = require('electron');
console.log('Electron version:', process.versions.electron);
app.whenReady().then(() => {
  console.log('Electron is working and ready');
  process.exit(0);
}).catch(err => {
  console.error('Electron failed to start:', err);
  process.exit(1);
});
setTimeout(() => {
    console.log('Timeout reached, Electron might not be able to initialize GUI');
    process.exit(1);
}, 5000);
