import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavBarComponent = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />
        EPG APP
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavBarComponent
