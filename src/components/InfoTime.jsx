import {useContext} from "react"
import {Context} from '../context/ContextProvider.jsx'

export default function InfoTime() {
  const {infoTime, setInfoTime} = useContext(Context);

  const times = ["Daily", "Weekly", "Monthly"];

  const timeHandler = (e) => {
    if ((e.currentTarget.textContent).toLocaleLowerCase("EN") !== infoTime) {
      setInfoTime((e.currentTarget.textContent).toLocaleLowerCase("EN"))
    }
  }

  return (
    <>
      {times.map((time, index) => (
        <button
          className={`${infoTime === time.toLocaleLowerCase("EN") ? "btn text-white fs-1" : "btn text-white-50 fs-4"}`}
          key={index} onClick={timeHandler}>{time}</button>
      ))}
    </>
  );
}