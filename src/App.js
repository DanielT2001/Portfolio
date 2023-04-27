import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/Portfolio/About';
import Home from './pages/Portfolio/Home';
import UI from './pages/Portfolio/UI';
import NurtureMe from './pages/Portfolio/NurtureMe';
import ProjectNurtureMe from './pages/Projects/NurtureMe/NurtureMe';
import Error from './pages/Portfolio/Error';
import CryptoFix from './pages/Portfolio/CryptoFix';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/UI' element={<UI />} />
        <Route path='/nurtureme' element={<NurtureMe />} />
        <Route path='/nurtureme/page' element={<ProjectNurtureMe />} />
        <Route path='/crypto' element={<CryptoFix />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
