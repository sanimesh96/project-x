import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CoverPage from './CoverPage';
import Test from './Test';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CoverPage />}/>
        <Route exact path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
