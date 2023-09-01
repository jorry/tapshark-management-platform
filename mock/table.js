const Mock = require('mockjs')

const data = Mock.mock({
  'items|9': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const createCardList = Mock.mock({
  'items|10': [{
    id: '@id',
    cDate: '2022-1-1',
    cCount: '1',
    cIsCreate: '是',
    cEmail: '15311118262@163.com'
  }]
})

const search = Mock.mock({
  'items|5': [{
    id: '@id',
    cDate: '2022-1-1',
    cCount: '1',
    cIsCreate: '是',
    cEmail: 'search@163.com'
  }]
})

const reachargeCodeList = Mock.mock({
  'items|15': [{
    id: '@id',
    cCode: 'AAAA-AAAA-AAAA-AAAA',
    cEmail: 'search@163.com',
    cMonney: '$123.11'
  
  }]
})

const reachargeCodeSearchList = Mock.mock({
  'items|2': [{
    id: '@id',
    cCode: 'AAAA-AAAA-AAAA-AAAA',
    cEmail: 'search@163.com',
    cMonney: '$123.11'
  
  }]
})

const createRechangeCode = Mock.mock({
  'data': {    
    rechargeCode: 'BBBB-BBBB-BBBB-BBBB',
  }
})

module.exports = [
  {
    url: '/vue-admin-template/cardManager/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },{
    url: '/vue-admin-template/getCreateCardList/list',
    type: 'get',
    response: config => {
      const items = createCardList.items
      return {
        code: 20000,
        data: {
          createCardList: items.length,
          items: items
        }
      }
    }
  },{
    url: '/vue-admin-template/getCreateCardSearch/list',
    type: 'get',
    response: config => {
      const items = search.items
      return {
        code: 20000,
        data: {
          createCardList: items.length,
          items: items
        }
      }
    }
  },{
    url: '/vue-admin-template/rechargeCode/list',
    type: 'get',
    response: config => {
      const items = reachargeCodeList.items
      return {
        code: 20000,
        data: {
          createCardList: items.length,
          items: items
        }
      }
    }
  },{
    url: '/vue-admin-template/getRechargeCodeSearch/list',
    type: 'get',
    response: config => {
      const items = reachargeCodeSearchList.items
      return {
        code: 20000,
        data: {
          searchCount: items.length,
          items: items
        }
      }
    }
  },{
    url: '/vue-admin-template/createRechargeCode',
    type: 'get',
    response: config => {
      const data = createRechangeCode.data
      return {
        code: 20000,
        data: {
          rechargeCode: data.rechargeCode
        }
      }
    }
  },{
    url: '/vue-admin-template/createRechargeCode',
    type: 'get',
    response: config => {
      const data = createRechangeCode.data
      return {
        code: 20000,
        data: {
          rechargeCode: data.rechargeCode
        }
      }
    }
  }
]
