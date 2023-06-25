import React from 'react'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'
import MenuItem from '../components/MenuItem'

export const Menu = () => 
{
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Menülerimiz</h1>
        <div className='menuList'>
            {
                MenuList.map((menuItem, key)=> {
                    return <MenuItem 
                    key={key}
                    image={menuItem.image} 
                    name={menuItem.name}
                    price={menuItem.price}/>
                })
            }
        </div>
    </div>
  )
}
