import {useContext} from "react";
import {Context} from '../context/ContextProvider.jsx';

export default function PersonelFilter() {

  const {users} = useContext(Context);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
      {users.map((user, index) => (
        <button className="btn btn-outline-dark" key={index}>{user}</button>
      ))}
    </div>
  );
}