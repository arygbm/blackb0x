import React from 'react'
import InputComponent from '../input-component/input'
import './header.css'
import {Link} from 'react-router-dom'
import { RiProfileLine } from "react-icons/ri";
import {BiPurchaseTag} from 'react-icons/bi'
import {GiAchievement} from 'react-icons/gi'
import {VscLibrary} from 'react-icons/vsc'
const Header = ()=>(
    <header className='header'>
        <ul>
            <li className='header-title'> 
              <Link to= '/'>
                
              Black Box
              </Link>
          
            </li>
            <span className='header-search'>
            <li>
                <InputComponent type={'search'} placeholder={'search'} />
            </li>
            </span>
            <span className='header-page-navigation'>
           
            <li>
              <VscLibrary className='icon'/>
            My Library
              
            </li>
            <li>
                <GiAchievement className='icon'/>
               Achievements
             
            </li>
            <li>
                <BiPurchaseTag className='icon'/>
                Purchases
             
            </li>
          
            <Link to="/login">
              
                <li>
                <RiProfileLine className='icon'/>  
                Profile
                </li>
            </Link>
             
         
            </span>
           
           
        </ul>
       
      
     
     
     

    </header>
  
)

export default Header