import React from 'react'
import {userRef} from '../firebase'

export default (userDetails)=>{
  userRef.child().set({
     firstName:"",
     lastName:"",
     email:'',
     imageURL:''
  })
}