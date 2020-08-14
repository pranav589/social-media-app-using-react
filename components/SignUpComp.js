import React,{useState} from 'react'
import {Input} from 'react-materialize'
import signUp from '../api/SignUp'
import SignUp from '../components/SignUpComp'

export default (props)=>{

  const [data,setData]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    })

  const submit=  ()=>{
    const result= signUp(data)
    if(result){
      console.log('SIGN UP DONE')
    }else if (result===false)(
      console.log("NOT DONE")
    )
  }

  const onChangeText=(key,value)=>{
    const newData={...data}
    newData[key]=value;
    setData(newData)
  }

  return(
    <div style={{display:'flex', justifyContent:'center'}}>
    
      <div className='outerBox'>
      <h4>Sign Up</h4>
        <div className="input-field ">
            <input id="firstName" type="text" onChange={(e)=>onChangeText('firstName',e.target.value)}/>
            <label htmlFor="firstName">First Name</label>
        </div>

        <div className='input-field'>
            <input id="lastName" type="text" onChange={(e)=>onChangeText('lastName',e.target.value)}/>
            <label htmlFor="lastName">Last Name</label>
        </div>
        
        <div className='input-field'>
            <input id="email" type="email" onChange={(e)=>onChangeText('email',e.target.value)}/>
            <label htmlFor="email">Email</label>
        </div>    

        <div className='input-field'>
            <input id="password" type="password" onChange={(e)=>onChangeText('password',e.target.value)}/>
            <label htmlFor="password">Password</label>
          
          </div>

        <button onClick={submit}>Submit</button>  
        <p>Already have an account? <span onClick={()=>{props.changeState('SI')}}>Sign In</span></p>
      </div>
    </div>
  )
}
