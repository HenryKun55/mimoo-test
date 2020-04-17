import api from './api'

import ApiError from '../types/ApiError'
import Product from '../types/Product'
import Brand from '../types/Brand'

export interface IGetProducts {
  category: string;
  brands: Brand[];
}

export interface IGetProduct {
  name: string;
  image: string;
  brand: string;
}

export async function getProducts(): Promise<IGetProducts[]> {
  try {
    const { data } = await api.get('/products')
    return data
  } catch (error) {
    console.log('[ProductService] - Error', error)
    throw new ApiError(error.response.data.description)
  }
}

export async function getProduct(barcode: string): Promise<Product> {
  try {
    const { data } = await api.get(`/products/${barcode}`)
    return data
  } catch (error) {
    throw new ApiError(error.response.data.description)
  }
}
