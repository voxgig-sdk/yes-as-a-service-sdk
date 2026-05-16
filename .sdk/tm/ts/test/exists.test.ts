
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YesAsAServiceSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await YesAsAServiceSDK.test()
    equal(null !== testsdk, true)
  })

})
