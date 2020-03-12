import { CLIOptions } from '../types'

export function cliInit(projectName: string, options: CLIOptions): string {
  switch (options.cli) {
    case 'react-native-cli':
      return `npx react-native init ${projectName} --template ${options.template}`
    case 'expo':
      return `npx expo-cli init ${projectName} --template ${options.template}`
    case 'ignite-classic':
      return `npx ignite-cli@3.5.1 new ${projectName} -b ${options.template}`
  }
}
