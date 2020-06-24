import request from '@/utils/request'
// eslint-disable-next-line no-unused-vars
import { CustomerContent } from '@/entity/Customer'
const mockNum = '/mock/89/api/'

export const getCustomerList = ():Promise<{contents:Array<CustomerContent>, totalElements:number}> => {
  return request({
      url: mockNum + 'customer/list',
      method: 'get'
  })
}
export const createCustomer = (data:CustomerContent) => {
  return request({
    url: mockNum + 'customer',
    method: 'post',
    data
  })
}

export const updateCustomer = (data:CustomerContent) => {
  return request({
    url: mockNum + 'customer',
    method: 'put',
    data
  })
}
export const deleteCustomer = (id:string) => {
  return request({
    url: mockNum + 'customer/' + id,
    method: 'delete'
  })
}

