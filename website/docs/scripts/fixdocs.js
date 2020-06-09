const fs = require('fs');
const path = require('path');

async function writeFile(filePath, fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, fileContent, (err) => (err ? reject(err) : resolve()));
    });
}

async function emptyIndexMd() {
    const src = path.resolve(__dirname, `../../../website/docs/api/index.md`);
    await writeFile(src, '');
}

async function fixDocs() {
    console.log('Fixing Docs...');
    await emptyIndexMd();
    console.log('Docs fixed successfully.');
}

fixDocs().catch(console.error);
