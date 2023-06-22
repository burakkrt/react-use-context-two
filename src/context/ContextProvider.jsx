import {createContext, useState} from "react"
import {personels} from '../data.js'

export const Context = createContext(null)

export default function ContextProvider({children}) {


  const [users, setUsers] = useState(personels.map(personel => personel.user));
  const [currentInfo, setCurrentInfo] = useState(personels[0]);
  const [infoTime, setInfoTime] = useState("weekly");

  if (localStorage.getItem("user") !== null && localStorage.getItem("user") !== currentInfo.user) {
    setCurrentInfo(personels.find(personel => personel.user === localStorage.getItem("user")))
  } else {
    localStorage.setItem("user", currentInfo.user);
  }

  if (localStorage.getItem("infoTime") !== null && localStorage.getItem("infoTime") !== infoTime) {
    setInfoTime(localStorage.getItem("infoTime"))
  } else {
    localStorage.setItem("infoTime", infoTime)
  }

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