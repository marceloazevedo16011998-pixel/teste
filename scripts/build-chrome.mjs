import {cp,rm,mkdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
const out='chrome-extension';
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp('manifest.json',`${out}/manifest.json`);
await cp('background.js',`${out}/background.js`);
await cp('sidepanel',`${out}/sidepanel`,{recursive:true});
console.log(`Chrome extension generated at ${out}/`);
