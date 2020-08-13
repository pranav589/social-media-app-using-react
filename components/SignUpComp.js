import React from 'react'
import {TextInput} from 'react'


export default ()=>{
  return(
    <div>
      <div className='outerBox'>
        <TextInput label='First Name'/>
        <TextInput label='Last Name'/>
        <TextInput label="Email"/>
        <TextInput label="Password"/>
      </div>
    </div>
  )
}
