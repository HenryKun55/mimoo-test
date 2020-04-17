// localforage

export enum Types {
  NAME = 'MimmoApp@name'
}

const getName = () =>
  localStorage.getItem(Types.NAME)

const setName = (name: string) => 
  localStorage.setItem(Types.NAME, name)

export {
  getName,
  setName,
}
