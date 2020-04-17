import { call, put } from 'redux-saga/effects'
import { getProductsSuccess, getProductSuccess } from './actions'
import * as ProductService from '../../../services/product.service'
import { IGetProducts, IGetProduct } from '../../../services/product.service'
import ApiError from '../../../types/ApiError'

export function* getProducts() {
  try {
    const products: IGetProducts[] = yield call(ProductService.getProducts)
    yield put(getProductsSuccess(products))
  } catch (error) {
    console.log('[ProductSaga] - Error', error)
    if(error instanceof ApiError) {
      alert(error.description)
    }
  }
}

export function* getProduct(payload: any) {
  const { barcode } = payload.payload;
  try {
    const product: IGetProduct = yield call(ProductService.getProduct, barcode)
    yield put(getProductSuccess(product))
  } catch (error) {
    console.log('[ProductSaga] - Error', error)
    if(error instanceof ApiError) {
      alert(error.description)
    }
  }
}
