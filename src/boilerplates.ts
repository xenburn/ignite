import { Boilerplate } from './types'

export const boilerplates: Boilerplate[] = [
  {
    name: 'Ignite Bowser',
    highlighted: true,
    description: "Infinite Red's latest and greatest boilerplate",
    stack: ['React Native', 'TypeScript', 'MobX-State-Tree', 'React Navigation'],
    cli: 'react-native-cli',
    template: 'react-native-template-typescript', // TODO
  },
  {
    name: 'Ignite Andross',
    highlighted: true,
    description: "Infinite Red's legacy boilerplate",
    stack: ['React Native', 'Redux', 'Redux Sagas', 'React Navigation'],
    cli: 'ignite-classic',
    template: 'ignite-andross',
  },
  {
    name: 'React Native Vanilla TypeScript',
    highlighted: false,
    description: "Facebook's TypeScript template",
    stack: ['React Native', 'TypeScript'],
    cli: 'react-native-cli',
    template: 'react-native-template-typescript',
  },
]
