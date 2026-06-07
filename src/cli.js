import minimist from 'minimist';
import { now } from './now.js';
import { forecast } from './forecast.js';
import { help } from './help.js';
import { configure } from './configure.js';
import { version } from './version.js';

export async function cli(argsArray) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'version':
      version(args);
      break;

    case 'help':
      help(args);
      break;

    case 'now':
      now(args);
      break;

    case 'forecast':
      forecast(args);
      break;

    case 'config':
      configure(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}
