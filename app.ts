import fs from 'fs';
import { Readable, Transform, pipeline } from 'stream';

// Readable stream - Read data from a file
const readableStream = fs.createReadStream('classic.txt', 'utf8');

// Transform stream - Modify the data if needed
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Perform any necessary transformations
    const modifiedData = chunk.toString().toUpperCase(); // Placeholder for transformation logic
    this.push(modifiedData);
    callback();
  },
});



// Writable stream - Write compressed data to a file
const writableStream = fs.createWriteStream('compressed-tale.txt');

// Pipe streams together
// readableStream.pipe(transformStream).pipe(writableStream);

pipeline(
  readableStream,
  transformStream,
  writableStream
  )
// Event handlers for completion and error
writableStream.on('finish', () => {
  console.log('Compression complete.');
});

writableStream.on('error', (err) => {
  console.error('An error occurred during compression:', err);
});