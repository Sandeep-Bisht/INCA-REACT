import logo from './logo.svg';
// import './App.css';
import './css/common.css'

import { ApplicationRoutes } from './Routes';

function App() {
  console.log('inside thisss')
  let path = window.location.pathname
    console.log(path, 'path')
  return (
    <div className="App">
      <ApplicationRoutes path = {path} />
    </div>
  );
}

export default App;
