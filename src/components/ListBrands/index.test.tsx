import React from 'react'
// import axios from 'axios'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ListBrands from './index'
import Brand from '../../types/Brand'
import { colors } from '../../styles'
import { getProducts } from '../../services/product.service'
// import ApiError from '../../types/ApiError'

let container: HTMLDivElement | null = null
let data: Brand[] = []

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// const mockData = [
//   {
//     "category": "Skin Care",
//     "brands": [
//       {
//         "name": "Jeunesse",
//         "products": [
//           {
//             "name": "Jeunesse SPA",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Jeunesse-Spa.png"
//           },
//           {
//             "name": "Luminesce",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Luminesce.png"
//           }
//         ]
//       },
//       {
//         "name": "Nívea",
//         "products": [
//           {
//             "name": "Nívea Creme Kids",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Nivea-Kids.png"
//           },
//           {
//             "name": "Nívea Urban Detox Mask",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Nivea-Urban-Detox-Mask.png"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "category": "Snacks",
//     "brands": [
//       {
//         "name": "Nestlé",
//         "products": [
//           {
//             "name": "Negresco",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Negresco.png"
//           },
//           {
//             "name": "Passatempo",
//             "image": "https://mimoo-frontend-challenge-resources.s3.us-east-1.amazonaws.com/Passatempo.png"
//           }
//         ]
//       }
//     ]
//   }
// ]

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

// describe('fetchData', () => {
//   it('fetches successfully data products ', async () => {
//     mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockData));
//   });

//   it('fetches erroneously data products', async () => {
//     const errorMessage = 'Network Error';
//     mockedAxios.get.mockImplementationOnce(() =>
//       Promise.reject(new ApiError(errorMessage)),
//     );
//   });
// });
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
    const color = colors.cordepele
  
    act(() => {
      render(<ListBrands background={color} id='list-brands' data={data} />, container)
    })
    
    const image = container?.getElementsByTagName('img')[0]
  
    expect(image).toHaveStyle(`background-color: ${color}`)
  })
})
