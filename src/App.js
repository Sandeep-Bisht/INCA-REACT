import { ApplicationRoutes } from './Routes';
// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";                                //icons
import './css/common.css';


function App() {
  let path = window.location.pathname
  return (
    <div className="App">
      <ApplicationRoutes path = {path} />
    </div>
  );
}

export default App;
