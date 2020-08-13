import React from 'react'
import {Input} from 'react-materialize'


export default ()=>{
  return(
    <div>
      <div className='outerBox'>
        <div className="input-field">
            <input id="email" type="email"/>
            <label htmlFor="email">Email</label>
          </div>

        <div className='input-field'>
            <input type='password' id='password'/>
            <label htmlFor='passowrd' type='password'>Password</label>
        </div>
      </div>
    </div>
  )
}


