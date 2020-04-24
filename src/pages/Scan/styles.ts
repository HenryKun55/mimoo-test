import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import { Button } from '../../components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
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
  font-family: ${fonts.circular};
  opacity: 0.47;
`

export const CanvasContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: calc( 100% - 117px);
  text-align: center;
`

export const TitleBarCode = styled.h1`
  top: 16%;
  font-size: 23px;
  position: absolute;
  width: 100%;
  text-align: center;
  color: ${colors.secondary};
  font-family: ${fonts.circular};
`

export const BarcodeReader = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 122px);

  video {
    object-fit: cover;
    width: 100%;
  }
  
  .drawingBuffer {
    display: none;
  }

`

export const CodeContainer = styled.div`
  width: 100%;
  height: 17%;
  text-align: center;
  background-color: rgba(255,255,255,.3);
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  backdrop-filter: blur(30px);
`

export const Footer = styled.div`
  display: flex;  
  height: 47px;
`

export const ConfirmButton = styled(Button)`
  width: 100%;
`

export const Canvas = styled.canvas`
 width: 100%;
  height: 83%;
`

export const CodeResultTitle = styled.span`
  text-align: center;
  font-family: ${fonts.circular};
  font-size: 17px;
  margin-left: 20px;
  color: ${colors.secondary};
  opacity: 1;
`

export const CodeResult = styled.span`
  color: ${colors.secondary};
  font-size: 23px;
  margin-left: 20px;
  font-weight: bold;
`
