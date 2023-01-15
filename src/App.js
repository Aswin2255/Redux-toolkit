
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Moviedetail from './components/Moviedetails/Moviedetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    
    <div className="App">
       <BrowserRouter>
                <Routes>
            
                    <Route path='/'element={<Home/>}></Route>
                    <Route path='/movies/:id'element={<Moviedetail/>}></Route>
                   
                   
                   
                </Routes>

            </BrowserRouter>
    </div>
  );
}

export default App;
