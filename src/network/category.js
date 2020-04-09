import {request} from './request.js'

export function getCategoryDate(){
  return request({
    url:'/mock/data.json'
  })
}