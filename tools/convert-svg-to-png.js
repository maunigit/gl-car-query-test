// https://github.com/neocotic/convert-svg
// https://www.npmjs.com/package/convert-svg-to-png


const { createConverter } = require('convert-svg-to-png');

let fs = require('fs');
var path = require('path');

async function convertSvgFiles(dirPath) {
  console.log('dirPath: ' + dirPath);


  let options2 = {
    puppeteer: { // https://github.com/neocotic/convert-svg/issues/67 e https://github.com/neocotic/convert-svg/issues/47
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
          ]
      //  ,executablePath: './node_modules/puppeteer/.local-chromium/win64-686378/chrome-win/chrome.exe'
    }
  };

  let converter = createConverter(options2);
  try {


let filesList =  fs.readdirSync(dirPath);

// for (var i=0; i<filesList.length; i++) {
  // let item = filesList[i];
  // console.log(item);
  // let ext = path.extname(item).toLowerCase();
  // console.log(ext);
//}

filesList = filesList.filter(function(file) {
  return path.extname(file).toLowerCase() === '.svg';
});

console.log('filesList = ' + filesList);

for (let fileName of filesList) {
  let filePath = dirPath + '/' + fileName;
  // Verificare l'utilità del seguente statement filePath = path.resolve(filePath);
  console.log('filePath: ' + filePath);
  let options = {
    width: 50, // https://github.com/neocotic/convert-svg/tree/master/packages/convert-svg-to-png#cli
    height: 50
  };
  // The puppeteer option is not available when calling this method on a Converter instance
  // created using createConverter.
 let outputFilePath = await converter.convertFile(filePath, options);


 console.log('outputFilePath: ' + outputFilePath);
}

  } finally {
    await converter.destroy();
  }
}

async function movePngFiles(inputDir, targetDir){
  fs.readdir(inputDir, (err, files) => {

    files.forEach(file => {
       if (path.extname(file) === '.png') {
          let sourceFilePath = inputDir + '/' + file;
          let targetFilePath = targetDir + '/' + file;
             fs.rename(sourceFilePath, targetFilePath, err => {
                 if (err) throw err;
                 console.log('Moving ' + sourceFilePath + ' ...');
             });
       }

    })
  })
}

async function run(){
  let targetDir = './assets/images/png-cars';
  let inputDir = './assets/images/svg-cars';
  let resolve = require('path').resolve;
  let inputPath = resolve(inputDir);
  console.log('inputPath: ' + inputPath);
  var inputPath2 = path.resolve(inputPath);
  console.log('inputPath2: ' + inputPath2);
  // Converto i file svg in png
  await convertSvgFiles(inputPath);
  // Creo la cartella se non esiste
  if (!fs.existsSync(targetDir)){
    console.log('Path ' + targetDir + 'doesn\'t exist. I\'m going to create it...');
      fs.mkdirSync(targetDir);
  }
  // Sposto i file png
  await movePngFiles(inputDir, targetDir);
  console.log('Done :-)');
}

run();
