import { setName, getName, Types } from './UserSettings'

describe('UserSettings Unit Tests', () => {
  it('should set a name in local storage', () => {
    const name = 'User name saved'
    
    setName(name)

    const savedName = localStorage.getItem(Types.NAME)

    expect(savedName).toBe(name)
  })

  it('should get a name saved in local storage', () => {
    const name = 'User name saved'

    localStorage.setItem(Types.NAME, name)

    const savedName = getName()

    expect(savedName).toBe(name)
  })
})
