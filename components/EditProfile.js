import React,{useState} from 'react'
import {firebaseApp} from '../firebase'
import editUser from '../api/EditUser'

export default ({changeToFalse})=>{
   
   const [firstName,setFirstName]=useState("")
   const [lastName,setLastName]=useState("")
  
     const handleSubmit=()=>{
       const uid=firebaseApp.auth().currentUser.uid
       console.log(uid)
       const data={
         uid,
         firstName,
         lastName
       }
      const result=editUser(data)

      if(result){
        console.log('user edited')
      }

      if(result===false){
        console.log("error")
      }
     }
  
  return(
    <div>
    <div onClick={()=>changeToFalse()}>Go Back</div>
      <input value={firstName} onChange={e=>setFirstName(e.target.value)}/>
      <input value={lastName} onChange={e=>setLastName(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}