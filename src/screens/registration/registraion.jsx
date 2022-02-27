import React from 'react'
import InputComponent from '../../components/input-component/input';
import'./registration.css'
import sideimage from  '../../assets/images/register-illustration.png';
import {auth,} from '../../firebase/firebase'
import {Link, Navigate} from 'react-router-dom'

class Registration extends React.Component{

 
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',

    }
  }


  


  handleChange = async(event) => {
    
    await this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name+' '+event.target.value + ' state: '+this.state[event.target.name])
  
  };
  handleSubmit =  async(event) => {

  


    event.preventDefault();
    console.log(this.state.email + ' in submit');
    console.log(this.state.confirmPassword + ' in submit');
    console.log(this.state.password + ' in submit');
    console.log(this.state.displayName + ' in submit'); 
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
 
    try {
      console.log(email+ 'in try catch')
      console.log(password+ 'in try catch')
      const { user } = await auth.createUserWithEmailAndPassword(
       
        email,
        password
      );
      console.log(auth.getCurrentUser)
     console.log(user)
   
    } catch (error) {
      console.error(error);
    }
   
  }
render(){return(

    


    <div className='grid'>
        <div>
  
      
        <form onSubmit={this.handleSubmit}>
        <h2>ACCOUNT</h2>
        <h3>DETAILS</h3>
        <div className='container'>
        <InputComponent label={'email'} placeholder={'i.e. JonnJonzz@email.com'} name={'email'} type={'email'} id={'email'} onChange={this.handleChange} value={this.email}/>
        <InputComponent label={'password'} placeholder={'Jonn#191281'} name={'password'} type={'password'} id={'password'} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" onChange={this.handleChange} value={this.password}/>
        <InputComponent label={'confirm password'} placeholder={'confirm password must match initial password input'} name={'confirmPassword'} type={'password'} id={'confirm-password'} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" onChange={this.handleChange} value={this.confirmPassword}/>
        </div>
       
        <h2>PERSONAL</h2>
        <h3>INFORMATION</h3>
        <div className='container'>
        <InputComponent label={'display name'} placeholder={'i.e. The07thBam'} name={'displayName'} type={'text'} id={'display-name'} onChange={this.handleChange} value={this.displayName}/>
        <InputComponent label={'first name'} placeholder={'i.e. Jonn'} name={'first-name'} type={'text'} id={'first-name'}/>
        <InputComponent label={'last name'} placeholder={'i.e. Jonzz'} name={'last-name'} type={'text'} id={'last-name'}/>
        <InputComponent label={'contact number'} placeholder={'i.e. 092398179763'} name={'contact-number'} type={'number'} id={'contact-number'} />
        </div>
   

        <input type={'submit'} className='submit' value={'Register'} />
        </form>
        </div>
        <div>
        
        <div >
            
        <img src={sideimage} alt='register illustration' />
        <Link to='/login'>

        <h1 className='toSignInButton'>Already have an acccount? Sign in</h1>
        </Link>
       
        </div>
        </div>
       
        
    </div>
)}
}
export default Registration;