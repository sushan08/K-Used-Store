import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {Categories} from './pages/Categories'
import {Contact} from './pages/Contact'

function App() {

  return (

   <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Home/>} path='/home'/>
    <Route element={<Categories/>} path='/categories'/>
    <Route element={<Contact/>} path='/contact'/>
   </Routes>
    
  );
}

export default App;
