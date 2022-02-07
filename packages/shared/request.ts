import axios, { AxiosResponse } from 'axios'

export async function getData(): Promise<AxiosResponse> {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    adapter: getDefaultAdapter()
  })
  return response.data
}

// When bundled for node enviroment, axios is having troubles to determine
// which adapter to use
function getDefaultAdapter() {
  if (typeof XMLHttpRequest === 'undefined') {
    return require('axios/lib/adapters/http')
  }
}