[url]: http://rinaldi.io
[es6]: http://es6-features.org

# group-by [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/group-by/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/group-by)

> Group a list of objects by a given field name (implemented with [ES6 features][es6])

## Install

```sh
$ npm i rafaelrinaldi/group-by -S
```

## Usage

```js
import groupBy from 'group-by';

let list = [
  {name: 'palpatine', group: 'star wars'},
  {name: 'cat', group: 'animals'},
  {name: 'dog', group: 'animals'},
  {name: 'boba fett', group: 'star wars'},
]

groupBy(list, 'group')

/*
{ 'star wars': 
   [ { name: 'palpatine', group: 'star wars' },
     { name: 'boba fett', group: 'star wars' } ],
  animals: 
   [ { name: 'cat', group: 'animals' },
     { name: 'dog', group: 'animals' } ] }
*/
```

## License

MIT © [Rafael Rinaldi][url]
