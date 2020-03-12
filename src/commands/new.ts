import { GluegunCommand, Boilerplate } from '../types'
import { cliInit } from '../tools/clis'

const command: GluegunCommand = {
  run: async toolbox => {
    const { print, prompt, parameters, system } = toolbox
    const { newline, info, colors } = print
    const { validateProjectName } = require('../tools/validations')
    const { boilerplates } = require('../boilerplates')

    // retrieve project name from toolbox
    const projectName = validateProjectName(toolbox)

    // if boilerplate is provided, select that
    let boilerplate: undefined | Boilerplate
    const boilerplateFlag = parameters.options.boilerplate || parameters.options.b
    boilerplate = boilerplates.find(b => b.name == boilerplateFlag)

    if (!boilerplate) {
      const boilerplateChoices = boilerplates.map((bp: Boilerplate) => ({
        name: bp.name,
        message: `${bp.name}: ${bp.description}`,
        value: bp.name,
      }))

      const { boilerplateAsk } = await prompt.ask({
        name: 'boilerplateAsk',
        message: 'Which boilerplate would you like to use?',
        type: 'select',
        choices: boilerplateChoices,
      })

      boilerplate = boilerplates.find(b => b.name == boilerplateAsk)
    }

    newline()
    info(colors.red('🔥 Ignite CLI 🔥'))
    newline()
    info(`Creating ${projectName}...`)

    print.debug(boilerplate)

    const cliString = cliInit(projectName, { template: boilerplate.template, cli: boilerplate.cli })

    const output = await system.run(cliString, { stdio: 'inherit' })

    print.info(output)
  },
}

module.exports = command
