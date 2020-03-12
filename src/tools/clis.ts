import { CLIOptions } from '../types'

export function cliInit(projectName: string, options: CLIOptions): string {
  switch (options.cli) {
    case 'react-native-cli':
      return `npx react-native init ${projectName}`
    case 'expo':
      return `npx expo-cli init ${projectName}`
    case 'ignite-classic':
      return `# TODO`
  }
}
