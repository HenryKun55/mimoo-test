import styled from 'styled-components';
import { Button } from '../../components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.yellow};
  text-align: center;
  height: 100vh;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 25px;
  color: ${colors.secondary};
  margin-bottom: 10px;
  font-weight: 600;
`;

export const ProductName = styled.h1`
  font-size: 34px;
  color: ${colors.secondary};
  font-weight: bold;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 40%;
`

export const CongratulationsText = styled.h3`
  font-size: 22px;
  color: ${colors.grey};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContinueText = styled.h3`
  font-size: 22px;
  color: ${colors.grey};
  font-weight: 300;
`;

export const ContinueButton = styled(Button)`

`