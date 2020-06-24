interface Model {
  [key:string]:any
}
// 策略模式
export const CustomerCodeType:Model = {
  '1': { tagColor: '#87d068', name: '1级客户' },
  '2': { tagColor: '#2db7f5', name: '2级客户' },
  '3': { tagColor: '#108ee9', name: '3级客户' }
}
