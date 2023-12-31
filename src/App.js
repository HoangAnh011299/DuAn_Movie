import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import Header from './compunent/Header/Header';
import Spinner from './compunent/Spinner/Spinner';
import DetailPage from './page/DetailPage/DetailPage';
import HomeLayout from './layout/HomeLayout';
import Register from './page/Register/Register';


function App() {
  return (
    <div className='web_contariner'>
      <Spinner/>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:idPhim" element={<DetailPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
