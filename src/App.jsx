import {Fragment} from 'react';
import ContextProvider from "./context/ContextProvider";
import PersonelInfo from "./components/PersonelInfo";
import PersonelFilter from "./components/PersonelFilter.jsx";

export default function App() {

  return (
    <Fragment>
      <ContextProvider>
        <div
          className="container d-flex flex-column justify-content-center min-vh-100 py-5 py-lg-0">
          <div className="mb-4">
            <PersonelFilter/>
          </div>
          <div className="d-grid row-gap-4">
            <PersonelInfo/>
          </div>
        </div>
      </ContextProvider>
    </Fragment>
  );
}