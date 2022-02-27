import React from 'react'
import InputComponent from '../../components/input-component/input';
import'./login.css'
import sideimage from  '../../assets/images/login-illustration.png';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { render } from '@testing-library/react';
import {Link } from 'react-router-dom'
import {auth,} from '../../firebase/firebase'

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
       
          email: "",
          password: "",
         
        };
      }

      
      
      handleChange = async(event) => {
    
        await this.setState({ [event.target.name]: event.target.value });
            console.log(event.target.name+' '+event.target.value + ' state: '+this.state[event.target.name])
          
          };

      handleSubmit = async (event) => {
            event.preventDefault();
            const { email, password } = this.state;
            try {
              await auth.signInWithEmailAndPassword(email, password);
              console.log(auth.getCurrentUser)
              this.setState({ email: "", password: "" });
            } catch (error) {
              console.log(error);
            }
            this.setState({ email: "", password: "" });
          };
        

render(){return(

    


    <div className='grid'>
        <div>
       
        <form  onSubmit={this.handleSubmit}>
        <h2>LOGIN</h2>
        <h3>PAGE</h3>
        <div className='container'>
        <InputComponent onChange={this.handleChange} label={'email'} placeholder={'i.e. JonnJonzz@email.com'} name={'email'} type={'email'} id={'email'}/>
        <InputComponent onChange={this.handleChange} label={'password'} placeholder={'Jonn#191281'} name={'password'} type={'password'} id={'password'}/>
     
        </div>
       
      
   

        <input type={'submit'} className='submit' value={'Register'}/>
        </form>
        </div>
        <div>
        
        <div >
            
        <img src={sideimage} alt='register illustration' />
       
          <Link to='/register'>
          <h1 className='toSignInButton'>
          Don't have an account yet? Sign up
          
          </h1>
          </Link>
         
        </div>
        </div>
       
        
    </div>
)}
}
export default Login;