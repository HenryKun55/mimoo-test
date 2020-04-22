import { action } from 'typesafe-actions'
import { ProductTypes } from './types'
import { IGetProducts, IGetProduct } from '../../../services/product.service'

export const getProductsRequest = () =>
  action(ProductTypes.GET_PRODUCTS_REQUEST)

export const getProductsSuccess = (products: IGetProducts[]) =>
  action(ProductTypes.GET_PRODUCTS_SUCCESS, { products })

export const getProductRequest = (barcode: string) =>
  action(ProductTypes.GET_PRODUCT_REQUEST, { barcode })

export const getProductSuccess = (product: IGetProduct) =>
  action(ProductTypes.GET_PRODUCT_SUCCESS, { product })

export const cleanProduct = () =>
  action(ProductTypes.CLEAN_PRODUCT)
