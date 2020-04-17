import { all, takeLatest } from 'redux-saga/effects'

//Auth
import { AuthTypes } from '../ducks/auth/types'
import { storeUser } from '../ducks/auth/sagas'

//Products
import { ProductTypes } from '../ducks/products/types'
import { getProducts, getProduct } from '../ducks/products/sagas'

export default function* rootSaga() {
  yield all([
    
    //Auth
    takeLatest(AuthTypes.STORE_REQUEST, storeUser),

    //Products
    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductTypes.GET_PRODUCT_REQUEST, getProduct),
    
  ])
}
