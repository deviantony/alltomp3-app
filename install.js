const os = require('os');
const fs = require('fs');
const platform = os.platform();

// For reference
// const files = {
//   darwin: ['ffmpeg', 'fpcalc', 'ffprobe', 'eyeD3/bin/eyeD3'],
//   linux: ['eyeD3/bin/eyeD3'],
//   win32: [],
// };


// Windows specific
// fpcalc.exe can be found at https://github.com/acoustid/chromaprint/releases
// ffmpeg.exe and ffprobe.exe at https://www.gyan.dev/ffmpeg/builds/

if (platform == "linux") {
  eyeD3dir = './bin/eyeD3/bin';

  if (!fs.existsSync(eyeD3dir)){
    fs.mkdirSync(eyeD3dir, { recursive: true });
  }

  console.warning('EyeD3 binary install not supported yet. Please copy the binary in ./bin/eyeD3/bin manually and make sure the path is ./bin/eyeD3/bin/eyeD3')
} else {
  console.warning('Binaries are not supported on this platform');
}

