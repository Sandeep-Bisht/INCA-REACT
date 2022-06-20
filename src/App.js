import { ApplicationRoutes } from './Routes';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './css/common.css';

function App() {
  return (
    <div className="App">
      <ApplicationRoutes  />
    </div>
  );
}

export default App;
