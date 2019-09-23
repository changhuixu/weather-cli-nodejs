import chalk from 'chalk';

const menus = {
  main: `
${chalk.greenBright('weather [command] <options>')}

  ${chalk.blueBright('now')} ................ show weather for now
  ${chalk.blueBright('forecast')} ........... show weather forecast
  ${chalk.blueBright('config')}.............. set API key, default city ID, default temperature units
  ${chalk.blueBright('version')} ............ show package version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,

  now: `
${chalk.greenBright('weather now <options>')}

  --location, -l ..... the location to use
`,

  forecast: `
${chalk.greenBright('weather forecast <options>')}

  --location, -l ..... the location to use
`,

  config: `
  ${chalk.greenBright('weather config <options>')}

  --location, -l ..... the location to use
`,
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}
