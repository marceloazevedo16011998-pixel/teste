import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const run=promisify(execFile);
await run(process.platform==='win32'?'powershell':'bash',process.platform==='win32'?['-NoProfile','-Command','Compress-Archive -Path chrome-extension/* -DestinationPath MG-AI-Developer-Chrome.zip -Force']:['-lc','cd chrome-extension && zip -r ../MG-AI-Developer-Chrome.zip .']);
console.log('MG-AI-Developer-Chrome.zip generated with manifest.json at ZIP root.');
