import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/cardManager/list',
    method: 'get',
    crossDomain: true,
    params
  })
}

export function getCardManager(params) {
  return request({
    url: '/cardManager/cards',
    method: 'get',
    crossDomain: true,
    baseURL:'http://tapshark.co/manager',
    params
  })
}

export function searchCardManagerById(query) {
  const key = query;
  return request({
    url: '/vue-admin-template/cardManager/list?search='+query+'',
    method: 'get',
    crossDomain: true,
    baseURL:'http://tapshark.co/manager'
  })
}


export function getCreateCardList(params) {
  return request({
    url: '/cardmanager/getCreateCardList/list',
    method: 'get',
    crossDomain: true,
    baseURL:'http://tapshark.co/manager',
    params
  })
}

export function getCreateCardSearch(params) {
  return request({
    url: '/vue-admin-template/getCreateCardSearch/list',
    method: 'get',
    crossDomain: true,
    params
  })
}


export function getCreateCardDetail(params) {
  return request({
    url: '/vue-admin-template/creatCard/detail',
    method: 'get',
    crossDomain: true,
    params
  })
}

export function getRechargeCodeList(params) {
  return request({
    url: '/cardmanager/rechargeCode/list',
    baseURL:'http://tapshark.co/manager',
    datatype: 'jsonp',
    method: 'get',
    crossDomain: false,
    params
  })
}
export function createRechargeCode(data) {
  return request({
    url: '/cardmanager/createRechargeCode',
    method: 'post',
    crossDomain: true,
    baseURL:'http://tapshark.co/manager',
    data
  })
}

export function getCardDetail(data) {
  return request({
    url: '/cardmanager/getCardDetailByOrderId',
    method: 'post',
    datatype: 'jsonp',
    baseURL:'http://tapshark.co/manager',
    crossDomain: true,
    data
  })
}

export function cardDetailByOrderIdUpdate(data) {
  return request({
    url: '/cardmanager/cardDetailByOrderIdUpdate',
    method: 'post',
    datatype: 'jsonp',
    baseURL:'http://tapshark.co/manager',
    crossDomain: true,
    data
  })
}