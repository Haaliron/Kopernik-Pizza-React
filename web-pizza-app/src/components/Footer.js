import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css';

function Footer() 
{
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/>
        <TwitterIcon/>
        <GithubIcon/>
      </div>
      <p>
        &copy; 2023 kopernikpizza.com
      </p>
    </div>
  )
}

export default Footer