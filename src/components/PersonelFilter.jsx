import {useContext} from "react";
import {Context} from '../context/ContextProvider.jsx';
import {setLocalStorageUser, getLocalStorageUser} from "../localStorage.js";

export default function PersonelFilter() {

  const {users, personels, setCurrentInfo} = useContext(Context);

  const selectUserHandler = (e) => {
    setCurrentInfo(personels.find(personel => personel.user === e.target.textContent))
    setLocalStorageUser(e.target.textContent)
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
      {users.map((user, index) => (
        <button className={getLocalStorageUser() === user ? "btn btn-outline-dark active" : "btn btn-outline-dark"}
                key={index} onClick={selectUserHandler}>{user}</button>
      ))}
    </div>
  );
}