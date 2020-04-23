import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Tab, { TabProps } from './index'

let container: HTMLDivElement | null = null
let tabs: TabProps = []

beforeAll(() => {
  tabs = [
    {
      label: 'Skin care',
      render() {
        return <h1>Listando skin care</h1>
      }
    },
    {
      label: 'Snacks',
      render() {
        return <h1>Listando biscoito</h1>
      }
    },
  ]
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
describe('Tab Component Tests', () => {

  it('should render the first item fo tab array', () => {
    act(() => {
      render(<Tab id='tabs' tabs={tabs}/>, container)
    })
  
    const tabElement = container?.querySelector('#tabs')
  
    expect(tabElement.innerHTML).toContain('Listando skin care')
  })
  
  it('should render the second item fo tab array', () => {
    act(() => {
      render(<Tab id='tabs' initialValue={1} tabs={tabs}/>, container)
    })
  
    const tabElement = container?.querySelector('#tabs')
  
    expect(tabElement.innerHTML).toContain('Listando biscoito')
  })
  
  it('should render the second item fo tab array if clicked', () => {
    act(() => {
      render(<Tab id='tabs' tabs={tabs}/>, container)
    })
  
    const secondElementIndex = 1
    const tabElement = container?.querySelector('#tabs')
    const tabsElement = tabElement?.getElementsByClassName('MuiTab-root')[secondElementIndex]
  
    act(() => {
      tabsElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    })
  
    expect(tabElement.innerHTML).toContain('Listando biscoito')
  })
})
