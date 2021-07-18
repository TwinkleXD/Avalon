import './App.css';
import 'antd/dist/antd.min.css';
import Layouts from './Layout/index.js';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js';

function App() {
  return (
    <Router>
      <Layouts>
        {renderRoutes(routes)}
      </Layouts>
    </Router>
  );
}

export default App;
