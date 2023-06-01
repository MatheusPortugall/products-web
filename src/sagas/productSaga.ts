import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/types'
import * as actions from '../actions/productActions'
import * as api from '../api/productApi'

function* listProducts(action: any): Generator<any, any, any> {
  try {
    const payload = action.payload
    const response = yield call(api.requestListProducts, payload)
    yield put(actions.listProducts(response.data.items))
  } catch (error) {
   yield put(actions.error(error))
  }
}

function* listProductForId(action: any): Generator<any, any, any> {
  try {
    const payload = action.payload
    const response = yield call(api.requestProductForId, payload)
    yield put(actions.productForId(response.data.item))
  } catch (error) {
   yield put(actions.error(error))
  }
}

function* authSaga() {
  yield takeLatest(types.GET_PRODUCTS, listProducts)
  yield takeLatest(types.GET_PRODUCT_FOR_ID, listProductForId)
}

export default authSaga;