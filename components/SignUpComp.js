import React from 'react'
import {Input} from 'react-materialize'


export default ()=>{
  return(
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className='outerBox'>
        <div className="input-field ">
            <input id="firstName" type="text" />
            <label htmlFor="firstName">First Name</label>
        </div>

        <div className='input-field'>
            <input id="lastName" type="text" />
            <label htmlFor="lastName">Last Name</label>
        </div>
        
        <div className='input-field'>
            <input id="email" type="email"/>
            <label htmlFor="email">Email</label>
        </div>    

        <div className='input-field'>
            <input id="password" type="password"/>
            <label htmlFor="password">Password</label>
          
          </div>
      </div>
    </div>
  )
}
