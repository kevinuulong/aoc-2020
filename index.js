const argv = require('minimist')(process.argv.slice(2));
const day = (argv["d"] < 10 ? '0' : '') + argv["d"];
require('child_process').fork(`days/${day}/day${day}.js`);