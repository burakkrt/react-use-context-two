function App() {

  const dotHandler = () => {
    alert("Button Passive")
  }

  return (<div
    className="container d-flex flex-column align-items-center justify-content-center bg-secondary-subtle vh-100 row-gap-3">
    <div className="row w-100 column-gap-lg-3 row-gap-3 justify-content-end">
      <div className="card col-12 col-lg p-4 justify-content-center align-items-center">
        <img src={import.meta.env.VITE_PUBLIC_IMAGES_SRC + "image-jeremy.png"} className="object-fit-cover" alt=""
             style={{width: "95px", height: "95px"}}/>
        <div className="text-center mt-auto">
          <span className="text-white-50">Report For</span>
          <h4>Jeremy Jacson</h4>
        </div>
      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>

      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>
      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>
      </div>
    </div>
    <div className="row w-100 column-gap-lg-3 row-gap-3 justify-content-end">
      <div className="card col-12 col-lg p-4 justify-content-evenly align-items-center">
        <span className="text-white-50 fs-4">Daily</span>
        <span className="text-white my-2 fs-1">Weekly</span>
        <span className="text-white-50 fs-4">Monthly</span>
      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>
      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>
      </div>
      <div className="card col-12 col-lg-3 p-4 justify-content-around">
        <div className="card-head d-flex justify-content-between align-items-center">
          <span className="fs-5">Work</span>
          <button className="btn text-white p-0" onClick={dotHandler}><i className="fa-solid fa-ellipsis"></i></button>
        </div>
        <h1 className="mt-3" style={{fontSize: "4rem"}}>32hrs</h1>
        <span className="text-white-50">Last Week - 36hrs</span>
      </div>

    </div>
  </div>)
}

export default App