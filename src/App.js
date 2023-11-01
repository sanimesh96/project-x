import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CoverPage from './CoverPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CoverPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
