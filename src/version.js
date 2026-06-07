import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export async function version() {
  const packageJson = require('../package.json');
  console.log(packageJson.version);
}
