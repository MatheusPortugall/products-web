import * as types from '../actions/types';

interface ProductState {
  products: [] | null
  error: string | null
  author: {} | null
  categories: [] | null
  productDetail: {} | null
}

const initialState: ProductState = {
  products: [],
  author: {},
  error: null,
  categories: [],
  productDetail: null
}

const productReducer = (state = initialState, action: any): ProductState => {
  switch (action.type) {
    case types.LIST_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case types.PRODUCT_FOR_ID:
      return {
        ...state,
        productDetail: action.payload
      }
    default:
      return state;
  }
}

export default productReducer