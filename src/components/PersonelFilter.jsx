import {useContext} from "react";
import {Context} from '../context/ContextProvider.jsx';

export default function PersonelFilter() {

  const {users, personels, currentInfo, setCurrentInfo} = useContext(Context);

  const selectUserHandler = (e) => {
    setCurrentInfo(personels.find(personel => personel.user === e.target.textContent))
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
      {users.map((user, index) => (
        <button className={currentInfo.user === user ? "btn btn-outline-dark active" : "btn btn-outline-dark"}
                key={index} onClick={selectUserHandler}>{user}</button>
      ))}
    </div>
  );
}