import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Blog from './Pages/Blog/Blog';
import AboutMe from './Pages/About/AboutMe';
import Project from './Pages/Project/Project';
import Header from './Pages/Homepage/Header';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<AboutMe></AboutMe>}></Route>
        <Route path='project/:id' element={<Project></Project>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
