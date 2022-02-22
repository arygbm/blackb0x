import logo from './logo.svg';
import './App.css';
import './screens/registration/registraion'
import Registration from './screens/registration/registraion';
import firebase from 'firebase/compat/app'
import Login from './screens/login/login';
import ChangePass from './screens/changepassword/changepass';
import Home from './screens/home/home';
import Header from './components/header/header';
function App() {
 
  return (
    <div className="App">
    
      
 
      <Home/>
    </div>
  );
}

export default App;
