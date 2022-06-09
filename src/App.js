import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
