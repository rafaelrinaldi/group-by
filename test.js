let test = require('tape')
let groupBy = require('./dist').default

let list = [
  {name: 'palpatine', group: 'star wars'},
  {name: 'red', group: 'colors'},
  {name: 'cat', group: 'animals'},
  {name: 'blue', group: 'colors'},
  {name: 'dog', group: 'animals'},
  {name: 'boba fett', group: 'star wars'},
  {name: 'green', group: 'colors'}
]

let expected = {
  'animals': [
    {name: 'cat', group: 'animals'},
    {name: 'dog', group: 'animals'}
  ],

  'colors': [
    {name: 'red', group: 'colors'},
    {name: 'blue', group: 'colors'},
    {name: 'green', group: 'colors'}
  ],

  'star wars': [
    {name: 'palpatine', group: 'star wars'},
    {name: 'boba fett', group: 'star wars'}
  ]
}

let result = groupBy(list, 'group')

test('should have expected result', t => {
  t.deepEqual(result, expected)
  t.end()
})

test('should have expected keys', t => {
  let keys = Object.keys(result);

  ['animals', 'colors', 'star wars'].forEach(key => (
    t.ok(keys.includes(key), `should have key ${key}`)
  ))

  t.end()
})

test('should throw an error if `group` is not a string', t => {
  let err = () => groupBy(list, 42)

  t.throws(err, /TypeError/)
  t.end()
})
