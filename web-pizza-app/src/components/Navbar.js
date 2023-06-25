import React ,{ useState } from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() 
{
  const [openLinks,setOpenLinks] = useState(false);

  const toggleNavbar = () =>
  {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
              <Link to="/"> Ana Menü </Link>
              <Link to="/menu"> Menüler </Link>
              <Link to="/about"> Hakkımızda </Link>
              <Link to="/contact"> İletişim </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Ana Menü </Link>
            <Link to="/menu"> Menüler </Link>
            <Link to="/about"> Hakkımızda </Link>
            <Link to="/contact"> İletişim </Link>
            <button onClick={toggleNavbar}><ReorderIcon/></button>
        </div>
    </div>
  )
}

export default Navbar