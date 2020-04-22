import styled from 'styled-components';
import { Button } from '../../components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: ${colors.secondary};
`;

export const ProductName = styled.h1`
  font-size: 34px;
  color: ${colors.secondary};
  font-weight: bold;
`;

export const ProductImage = styled.img`
  flex: 1;
`;

export const CongratulationsText = styled.h3`
  font-size: 22px;
  color: ${colors.greyLight2};
  font-weight: 500;
`;

export const ContinueText = styled.h3`
  font-size: 22px;
  color: ${colors.greyLight};
`;

export const ContinueButton = styled(Button)`

`