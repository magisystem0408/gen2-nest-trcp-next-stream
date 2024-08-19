import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineFunction, secret} from '@aws-amplify/backend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const functionDir = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'nestjs',
    'dist',
    'apps',
    'api-trcp-stream-resolver',
    'main.js',
);

export const apiTrcpStreamResolver = defineFunction({
    name: 'apiTrcpStreamResolver',
    entry: functionDir,
    environment: {},
    memoryMB: 512,
    timeoutSeconds: 30,
});
