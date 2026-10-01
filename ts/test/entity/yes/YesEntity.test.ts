

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { YesAsAServiceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('YesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when YES_AS_A_SERVICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('YES_AS_A_SERVICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = YesAsAServiceSDK.test()
    const ent = testsdk.Yes()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.YES_AS_A_SERVICE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'yes.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"yes","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /yes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/yes","q":{},"r":{},"s":[{"lit":"yes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"yes","name__orig":"yes","Name":"Yes","name_":"yes","name-":"yes","NAME":"YES","index$":0}, {"active":true,"entity":"yes","key$":"BasicYesFlow","kind":"basic","name":"BasicYesFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"yes_ref01","srcdatavar":"yes_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-yes_ref01"}}],"index$":0}]}, 'Yes', {"GET /yes":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let yes_ref01_data = Object.values(setup.data.existing.yes)[0] as any

    // LOAD
    const yes_ref01_ent = client.Yes()
    const yes_ref01_match_dt0: any = {}
    const yes_ref01_data_dt0 = (await yes_ref01_ent.load(yes_ref01_match_dt0)).data()
    assert(null != yes_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/yes/YesTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = YesAsAServiceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['yes01','yes02','yes03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'YES_AS_A_SERVICE_TEST_YES_ENTID': idmap,
    'YES_AS_A_SERVICE_TEST_LIVE': 'FALSE',
    'YES_AS_A_SERVICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['YES_AS_A_SERVICE_TEST_YES_ENTID']

  const live = 'TRUE' === env.YES_AS_A_SERVICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['YES_AS_A_SERVICE_TEST_YES_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new YesAsAServiceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.YES_AS_A_SERVICE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
