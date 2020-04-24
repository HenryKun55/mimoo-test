import React from 'react'

import Brand from '../../types/Brand'
import Product from '../../types/Product'
import { colors } from '../../styles'
import {
  Container,
  BrandContainer,
  ProductContainer,
  Image,
  TitleContainer,
  Icon,
  Title,
} from './styles'

export interface ListBrandProps {
  id?: string;
  /**
   * Set this to change colors of background
   */
  background?: string;
  data: Brand[];
}

type Props = ListBrandProps

const ListBrands: React.FC<Props> = ({ data, background, ...props }) => (
  <Container {...props}>
    {data.map((brand: Brand, keyBrand) => (
      <BrandContainer key={keyBrand}>
        <TitleContainer>
          <Icon size={20} color={colors.greyLight} />
          <Title>{brand.name}</Title>
        </TitleContainer>

        <ProductContainer>
          {brand.products.map((product: Product, keyProduct) => (
            <Image key={keyProduct} src={product.image} background={background} />
          ))}
        </ProductContainer>
      </BrandContainer>
    ))}
  </Container>
)

export default ListBrands