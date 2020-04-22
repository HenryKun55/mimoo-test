import { Reducer } from 'redux'
import { ProductState, ProductTypes } from './types'

const INITIAL_STATE: ProductState = {
  data: [],
  loading: false,
}

/**
 * Reducer
 */
const product: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.products }
    case ProductTypes.GET_PRODUCT_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload.product }
    case ProductTypes.CLEAN_PRODUCT:
      return { ...state, product: undefined }
    default:
      return { ...state }
  }
}

export default product
