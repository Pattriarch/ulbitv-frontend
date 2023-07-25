import fs from 'fs';
import path from 'path';

const cacheDir = path.join(__dirname, '..', '..', 'node_modules', '.cache');
void fs.rmSync(cacheDir, { recursive: true, force: true });
