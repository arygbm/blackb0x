import logo from './logo.svg';
import './App.css';
import './screens/registration/registraion'
import Registration from './screens/registration/registraion';
import firebase from 'firebase/compat/app'
import Login from './screens/login/login';
import ChangePass from './screens/changepassword/changepass';
import Home from './screens/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
function App() {
 
  return (
    <BrowserRouter >
    <div className='App'>
    <Header/>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Registration/>} />
    </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
