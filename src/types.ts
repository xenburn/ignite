export { GluegunCommand } from 'gluegun'

export type CLIType = 'ignite-classic' | 'react-native-cli' | 'expo'

export type Boilerplate = {
  name: string
  highlighted: boolean
  description: string
  template: string
  cli: CLIType
  stack?: string[]
}

export type CLIOptions = {
  cli: CLIType
  template: string
}
