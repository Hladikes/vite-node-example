import { sum } from 'shared/math'
import { getUtilMessage } from 'shared/util'
import { getData } from 'shared/request'

console.log('Sum is', sum(420, 69))
console.log('Util message', getUtilMessage())

getData()
  .then(data => {
    console.log('Response data', data)
  })
  .catch(err => {
    console.log('Axios error', err)
  })