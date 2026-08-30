import {readFile,access} from 'node:fs/promises';
const need=['manifest.json','background.js','sidepanel/index.html'];
for(const f of need) await access(`chrome-extension/${f}`);
const m=JSON.parse(await readFile('chrome-extension/manifest.json','utf8'));
if(m.manifest_version!==3) throw new Error('manifest_version must be 3');
if(m.side_panel?.default_path!=='sidepanel/index.html') throw new Error('invalid side panel path');
const forbidden=/((api[_-]?key|client[_-]?secret|private[_-]?key|access[_-]?token|password)\s*[:=]\s*["'][^"']+["'])/i;
const {execFileSync}=await import('node:child_process');
const files=execFileSync('git',['ls-files','chrome-extension'],{encoding:'utf8'}).split('\n').filter(Boolean);
for(const f of files){if(/\.env($|\.)/i.test(f)) throw new Error(`Forbidden env file: ${f}`);const text=await readFile(f,'utf8').catch(()=> '');if(forbidden.test(text)) throw new Error(`Possible secret in ${f}`)}
console.log('Chrome extension checks passed.');
