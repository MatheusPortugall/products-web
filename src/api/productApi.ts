import request from './request'

const requestListProducts = (query: any) => request.get(`/api/items?q=${query}`)

const requestProductForId = (id: any) => request.get(`/api/items/${id}/description`)

export { requestListProducts, requestProductForId }