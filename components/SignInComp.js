import React from 'react'
import {Input} from 'react-materialize'


export default (props)=>{
  return(
    <div>
      <div className='outerBox'>
      <h4>Sign In</h4>
        <div className="input-field">
            <input id="email" type="email"/>
            <label htmlFor="email">Email</label>
          </div>

        <div className='input-field'>
            <input type='password' id='password'/>
            <label htmlFor='passowrd' type='password'>Password</label>
        </div>

        <p>Create a new account <span onClick={props.changeState('SU')}></span></p>

      </div>
    </div>
  )
}


