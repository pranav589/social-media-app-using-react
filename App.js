import React, { useEffect } from "react";

import {userRef} from './firebase'
import signUp from './api/SignUp'
import signIn from './api/SignIn'


function App() {
  useEffect(()=>{
    function callFunc(){
      userRef.push({
        Email:'pranav.bakale@gmail.com',
        Password:'12345'
      })
    }
    //callFunc()
  },[])

  const onSignIn=()=>{
    const result =signIn("lpaakx@gmail.com","1234556nknkj")
    console.log(result)
  }

   const onSignUp=()=>{
    const result =signUp("lpaakx@gmail.com","1234556nknkj",'pranav','bakale')
    console.log(result)
  }

  return (
    <div className="App">
      <button onClick={()=>onSignIn()}>Sign In</button>
      <button onClick={()=>onSignUp()}>Sign Up</button>
    </div>
  );
}

export default App

