import {useContext} from "react";
import {Context} from '../context/ContextProvider.jsx';
import InfoTime from "./InfoTime.jsx";

export default function PersonelInfo() {

  const {currentInfo, infoTime} = useContext(Context);

  const dotHandler = () => {
    alert("Button Passive")
  }

  function getInfoForTime(infoTime, infoIndex) {
    switch (infoTime) {
      case ("daily"):
        return [currentInfo.info[infoIndex].timeframes.daily.current, currentInfo.info[infoIndex].timeframes.daily.previous]
      case ("weekly"):
        return [currentInfo.info[infoIndex].timeframes.weekly.current, currentInfo.info[infoIndex].timeframes.weekly.previous]
      case ("monthly"):
        return [currentInfo.info[infoIndex].timeframes.monthly.current, currentInfo.info[infoIndex].timeframes.monthly.previous]
      default:
        return null;
    }
  }

  return (
    <>
      <div className="row column-gap-lg-4 row-gap-3">
        <div className="card col-12 col-lg p-4 justify-content-center align-items-center">
          <img src={import.meta.env.VITE_PUBLIC_USERS_IMAGES_SRC + currentInfo.userImage}
               className="object-fit-cover rounded-pill"
               alt={`${currentInfo.user} image`}
               style={{width: "95px", height: "95px"}}/>
          <div className="text-center mt-auto">
            <span className="text-white-50">Report For</span>
            <h4>{currentInfo.user}</h4>
          </div>
        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[0].title}</span>
            <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 0)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 0)[1]}hrs</span>

        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[1].title}</span>
            <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 1)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 1)[1]}hrs</span>
        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[2].title}</span>
            <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 2)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 2)[1]}hrs</span>
        </div>
      </div>
      <div className="row column-gap-lg-4 row-gap-3">
        <div className="card col-12 col-lg p-4 justify-content-evenly align-items-center">
          <InfoTime/>
        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[3].title}</span>
            <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 3)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 3)[1]}hrs</span>
        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[4].title}</span>
            <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 4)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 4)[1]}hrs</span>
        </div>
        <div className="card col-12 col-lg-3 p-4 justify-content-around">
          <div className="card-head d-flex justify-content-between align-items-center">
            <span className="fs-5">{currentInfo.info[5].title}</span>
            <button className="btn text-white p-0" onClick={() => alert("Button Passive")}><i
              className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <h1 className="mt-3" style={{fontSize: "4rem"}}>{getInfoForTime(infoTime, 5)[0]}hrs</h1>
          <span className="text-white-50">Last {infoTime} - {getInfoForTime(infoTime, 5)[1]}hrs</span>
        </div>
      </div>
    </>
  );
}