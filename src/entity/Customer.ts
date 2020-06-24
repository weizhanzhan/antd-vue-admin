import { getCustomerList, createCustomer, updateCustomer, deleteCustomer } from '@/api/customer'

export interface CustomerContent {
  id?:string
  name:string
  code:string
  address:string
  state:boolean
  phone:string
}

export class Customer {
  content:CustomerContent
  constructor(customer?:CustomerContent) {
    this.content = customer || {
      name: '',
      code: '',
      address: '',
      state: true,
      phone: ''
    }
  }
  create() {
    return createCustomer(this.content)
  }
  update() {
    return updateCustomer((this.content))
  }
  delete(customerId?:string) {
    return deleteCustomer(customerId || this.content.id as string)
  }
  static getAllCustoemrList() {
    return getCustomerList()
  }
}
