const fs = require('fs');
const XT = require('@cogsmith/xt').Init();

let args = process.argv;
let nodebin = args.shift();
let nodeapp = args.shift();

console.log({ NODEBIN: nodebin, NODEAPP: nodeapp, ARGS: args });

if (false) { }
else if (args[0] == 'version' || args[1] == 'version') {
    console.log(XT.Meta.Version);
}
else if (args[0] == 'evalxtnode' || args[1] == 'evalxtnode') {
    let evalxtnode = fs.readFileSync('/bin/evalxtnode').toString();
    console.log(evalxtnode);
}
else if (fs.existsSync('/app/app.js')) {
    let cmd = 'node /app/app.js ' + args.join(' ');
    XT.EXECA.command(cmd).stdout.pipe(process.stdout);
}
else {
    console.log('# XTNODE_ERROR_NOAPP_MISSING_SCRIPT: app.js');
}