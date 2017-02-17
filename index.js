export default function groupBy (list, group) {
  if (typeof group !== 'string') {
    throw new TypeError(`Expected "group" to be an string`)
  }

  let keys = list.map(item => item[group])
  let uniq = [ ...new Set(keys) ]
  let dict = uniq.reduce((prev, next) => {
    return {
      ...prev,
      [next]: []
    }
  }, {})

  list.forEach(item => dict[item[group]].push(item))

  return dict
}
