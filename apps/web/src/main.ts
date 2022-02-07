import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Check out the console 👀</h1>
`

import { getData } from 'shared/request'

getData()
  .then(res => console.log('Data', res))
  .catch(err => console.error('Error', err))