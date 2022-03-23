import { ApplicationRoutes } from './Routes';
import './css/common.css'

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
