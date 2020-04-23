import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Button from './index'
import { colors } from '../../styles'

let container: HTMLDivElement | null = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container as HTMLDivElement)
  container?.remove()
  container = null
})

it('should render a button with a text child', () => {
  act(() => {
    render(<Button className='primary-button' variant='primary'>Test</Button>, container)
  })
  
  const button = container?.querySelector('.primary-button')

  expect(button?.textContent).toBe('Test')
})

it('should render a button with primary variant', () => {
  act(() => {
    render(<Button className='primary-button' variant='primary'>Test</Button>, container)
  })
  
  const button = container?.querySelector('.primary-button')

  expect(button).toHaveStyle(`background-color: ${colors.primary}`)
})

it('should render a button with secondary variant', () => {
  act(() => {
    render(<Button className='secondary-button' variant='secondary'>Test</Button>, container)
  })

  const button = container?.querySelector('.secondary-button')

  expect(button).toHaveStyle(`background-color: ${colors.secondary}`)
})
