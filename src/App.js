import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CoverPage from './CoverPage';
import Letter from './Letter';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CoverPage />}/>
        <Route exact path="/letter" element={<Letter />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
