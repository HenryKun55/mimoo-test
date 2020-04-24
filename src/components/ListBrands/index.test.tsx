import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ListBrands from './index'
import Brand from '../../types/Brand'
import { colors } from '../../styles'
import { getProducts } from '../../services/product.service'

let container: HTMLDivElement | null = null
let data: Brand[] = []

beforeAll(async () => {
  const products = await getProducts()
  data = products[0].brands
})

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container as HTMLDivElement)
  container?.remove()
  container = null
})

describe('ListBrands Component Tests', () => {

  it('should render a title of each brand', () => {
    act(() => {
      render(<ListBrands id='list-brands' data={data} />, container)
    })
    
    const listBrands = container?.querySelector('#list-brands')
  
    data.forEach(brand => expect(listBrands?.innerHTML).toContain(brand.name))
  })
  
  it('should render a name of the products for each brands', () => {
    act(() => {
      render(<ListBrands id='list-brands' data={data} />, container)
    })
    
    const listBrands = container?.querySelector('#list-brands')
  
    data.forEach(brand =>
      brand.products.forEach(product => 
        expect(listBrands?.innerHTML).toContain(product.image)
      )
    )
  })
  
  it('should render background color of images is correct', () => {
    const color = colors.clamShell
  
    act(() => {
      render(<ListBrands background={color} id='list-brands' data={data} />, container)
    })
    
    const image = container?.getElementsByTagName('img')[0]
  
    expect(image).toHaveStyle(`background-color: ${color}`)
  })
})
