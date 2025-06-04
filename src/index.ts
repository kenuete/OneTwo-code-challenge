import * as readline from 'readline'
import { expandString } from './util/utils'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the string: ', (inputStr) => {
    console.log(expandString(inputStr))
    rl.close()
})