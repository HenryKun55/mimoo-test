import { IGetProducts, IGetProduct } from '../../../services/product.service';

/**
 * Types
 */

export interface ProductState {
  data: IGetProducts[];
  product?: IGetProduct;
  loading: boolean;
}

export enum ProductTypes {
  GET_PRODUCTS_REQUEST = 'product/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'product/GET_PRODUCTS_SUCCESS',
  GET_PRODUCT_REQUEST = 'product/GET_PRODUCT_REQUEST',
  GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS',
  CLEAN_PRODUCT = 'product/CLEAN_PRODUCT',
}
