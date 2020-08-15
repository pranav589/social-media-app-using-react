import React from 'react'
import {Navbar,NavItem,Icon,Container} from 'react-materialize'
import  'materialize-css'
import {firebaseApp} from '../firebase'
//import 'materialize-css/dist/css/materialize.min.css';

export default ({stage})=>{
  
  return(
    <div style={{background:'royalblue'}}>
    <Container>
    <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Socio</a>}
  className='custom-navbar'
  id="mobile-nav"
  
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  {stage==='loggedIn' && (
  <NavItem href="#" onClick={(e)=>{
    e.preventDefault()
    firebaseApp.auth().signOut()}}>
    Logout
  </NavItem>)}
  
</Navbar>
</Container>
</div>
  )
}