import axios from 'axios'

export function request(config){
  let instance = axios.create({
    baseURL:'http://192.168.2.103:8080',
    timeout: 5000
  })
  // instance.interceptors.response.use(res => {
  //   return res.data
  // })
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}