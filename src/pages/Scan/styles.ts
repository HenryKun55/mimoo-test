import styled from 'styled-components'
import { Button } from '../../components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`

export const Header = styled.div`
  display: flex;
  padding: 20px;
`

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 23px;
  color: ${colors.grey};
  font-family: 'Circular Std Book';
  opacity: 0.47;
`

export const TitleBarCode = styled.h1`
  top: 16%;
  z-index: 1;
  font-size: 23px;
  position: absolute;
  text-align: center;
  color: ${colors.secondary};
  font-family: 'Circular Std Book';
`

export const BarcodeReader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  canvas {
    width: 100%;
    height: 75%;
    position: absolute;
  }
  
  .drawingBuffer {
    display: none;
  }

`

export const CodeContainer = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
`

export const Footer = styled.div`
  display: flex;  
  height: 47px;
`

export const ConfirmButton = styled(Button)`
  position: fixed;
  width: 100%;
  bottom: 0;
`
