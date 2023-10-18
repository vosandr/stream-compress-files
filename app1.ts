import * as fs from "node:fs";
import { Readable } from "node:stream";

const nodeReadable = fs.createReadStream(
    "classic.txt",
    { encoding: "utf-8" }
);

const webReadableStream = Readable.toWeb(nodeReadable);

const reader = webReadableStream.getReader();

try {
    while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        console.log(`Line from file ${value}`);
    }
}

finally {
    reader.releaseLock
}