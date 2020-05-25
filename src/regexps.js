const symbol = '[a-zA-Zа-яА-Я]'
const space = '(?:\\s)'
const punctuation = '(?:\\.|,|\\s)'
const number = '(\\d+)'
const hour = '[°]'
const minute = `['’′]`
const second = `["”″]`

const genDMSREd = (ed, f = false) => `${space}?${number}${space}?${f ? `(?:\.?(\\d+)?)` : ''}${space}?${ed}?${space}?`
const halfOfDMSR = `${space}?${symbol}?${genDMSREd(hour)}${genDMSREd(minute)}${genDMSREd(second, true)}${symbol}?${space}?`

export const DMSR = new RegExp(`${halfOfDMSR}${punctuation}?${halfOfDMSR}`)
console.log(DMSR)

// const DMSR = /[a-zA-Zа-яА-Я]{0,1}(?:\s)?(\d+)°?(?:\s)?(\d+)['’]?(?:\s)?(\d+)(?:\.?(\d+)?)["”]?(?:\s)?[a-zA-Zа-яА-Я]{0,1}(?:\s)?(?:.|,)?(?:\s)?[a-zA-Zа-яА-Я]{0,1}(?:\s)?(\d+)°(?:\s)?(\d+)['’]?(?:\s)?(\d+)(?:\.?(\d+)?)["”]?(?:\s)?[a-zA-Zа-яА-Я]{0,1}/

const halfOfDDR = `${space}?${number}${punctuation}${number}${space}?`

export const DDR = new RegExp(`${halfOfDDR}${punctuation}${halfOfDDR}`)
console.log(DDR)

// const DDR = /(\d+)(?:.|,)(\d+)(?:\s)?,?(?:\s)?(\d+)(?:.|,)(\d+)/
