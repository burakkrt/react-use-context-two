import {createContext, useState} from "react"
import {personels} from '../data.js'

export const Context = createContext(null)

export default function ContextProvider({children}) {

  const [users, setUsers] = useState(personels.map(personel => personel.user));

  const datas = {
    personels,
    users,
    setUsers
  }

  return (
    <Context.Provider value={datas}>
      {children}
    </Context.Provider>
  );
}