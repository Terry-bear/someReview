import fs from 'fs'
import { readFile, writeFileSync } from 'fs'
import { promisify } from 'util'
import { resolve as r } from 'path'
import * as qs from 'querystring'

promisify(readFile)(r(__dirname, './test.json')).then(data => {
  data = JSON.parse(data)
  console.log(data.name)
  writeFileSync(r(__dirname, './name'), String(data.name), 'utf-8')
})
