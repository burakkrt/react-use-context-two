import {createContext, useState} from "react"
import {personels} from '../data.js'

export const Context = createContext(null)

export default function ContextProvider({children}) {

  const [users, setUsers] = useState(personels.map(personel => personel.user));
  const [currentInfo, setCurrentInfo] = useState(personels[0]);
  const [infoTime, setInfoTime] = useState("weekly");

  const datas = {
    personels,
    users,
    setUsers,
    currentInfo,
    setCurrentInfo,
    infoTime,
    setInfoTime
  }

  return (
    <Context.Provider value={datas}>
      {children}
    </Context.Provider>
  );
}