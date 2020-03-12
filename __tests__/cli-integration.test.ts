import { system, filesystem } from 'gluegun'
import * as tempy from 'tempy'

const src = filesystem.path(__dirname, '..')
const cwd = filesystem.cwd()

const cli = async cmd => system.run('node ' + filesystem.path(src, 'bin', 'ignite') + ` ${cmd}`)

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('ignite')
})

test('generates new project', async () => {
  const tempDir = tempy.directory()
  process.chdir(tempDir)

  const output = await cli('new Foo --')

  expect(output).toContain('THIS WILL FAIL')
  const fooApp = filesystem.read('app.ts')

  expect(fooApp).toContain(`THIS WILL ALSO FAIL`)

  // clean up
  filesystem.remove(tempDir)
  process.chdir(cwd)
})
