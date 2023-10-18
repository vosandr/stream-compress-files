import fs from 'fs';
import readline from 'readline';
import { Transform, pipeline } from 'stream';
import {EOL} from 'os';

const fileStream = fs.createReadStream('classic.txt');
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
});
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

const writeStream=fs.createWriteStream('classic1.txt')

rl.on('line', (line)=>{
    line = line.replace('b', 'B')
    writeStream.write(`${line}${EOL}`)    
})

