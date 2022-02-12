import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const header = ()=> (
    <div className='header'>
       <Link className='logo-container' to='/'>
           <Logo className='logo'>

           </Logo>
           <div className='options'>
             <Link to='/shop'>Shop</Link>
             <Link to='/shop'>Contact</Link>
           </div>
       </Link>
    </div>
)
export default header;