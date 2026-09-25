
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YesAsAServiceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = YesAsAServiceSDK.test()
    equal(testsdk instanceof YesAsAServiceSDK, true,
      'YesAsAServiceSDK.test() must return a client synchronously')
  })

})
