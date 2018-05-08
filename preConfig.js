const fs = require('fs-extra');

const confPath = './public/config.json';

if (fs.existsSync(confPath)) {
    fs.unlinkSync(confPath);
}

fs.copySync('./config.json', confPath);