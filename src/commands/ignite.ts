import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to Ignite!')
  }
}

module.exports = command
