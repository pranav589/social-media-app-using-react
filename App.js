import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import {userRef} from './firebase'
import signUp from './api/SignUp'
import signIn from './api/SignIn'
import SignIn from './components/SignInComp'
import SignUp from './components/SignUpComp'
import Feed from './components/FeedComp'
import Nav from './components/Navbar'


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
       
      <Nav/>
      <Feed/>
      <button onClick={()=>onSignUp()}>Sign Up</button>
    </div>
  );
}

export default App

