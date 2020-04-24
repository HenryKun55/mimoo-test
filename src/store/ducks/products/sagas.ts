import { call, put } from 'redux-saga/effects'

import { setPoints } from '../auth/actions'
import ApiError from '../../../types/ApiError'
import * as ProductService from '../../../services/product.service'
import { IGetProducts, IGetProduct } from '../../../services/product.service'
import { getProductsSuccess, getProductSuccess, setProductSuccess } from './actions'

export function* getProducts() {
  try {
    const products: IGetProducts[] = yield call(ProductService.getProducts)
    yield put(getProductsSuccess(products))
  } catch (error) {
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
    if(error instanceof ApiError) {
      alert(error.description)
    }
  }
}

export function* setProduct(payload: any){
  const { product } = payload.payload;
  yield put(setProductSuccess(product))
  yield put(setPoints(100))
}