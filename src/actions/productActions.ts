import * as types from './types'

export const getProducts = (query: any) => ({
    type: types.GET_PRODUCTS,
    payload: query
})

export const listProducts = (data: any) => ({
    type: types.LIST_PRODUCTS,
    payload: data
})

export const getProductForId = (id: any) => ({
    type: types.GET_PRODUCT_FOR_ID,
    payload: id
})

export const productForId = (product: any) => ({
    type: types.PRODUCT_FOR_ID,
    payload: product
})

export const error = (message: any) => ({
    type: types.ERROR,
    payload: message
})