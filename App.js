import React, { useEffect,useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import {userRef,firebaseApp} from './firebase'
import signUp from './api/SignUp'
import signIn from './api/SignIn'
import SignIn from './components/SignInComp'
import SignUp from './components/SignUpComp'
import Feed from './components/FeedComp'
import Nav from './components/Navbar'


function App() {
  const [stage,setStage]=useState('')
  const [signUpSignIn,setSignUpSignIn]=useState('SI')
  
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

  firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.uid)
    setStage('loggedIn')
  } else {
    // No user is signed in.
    console.log('no user logged in')
    setStage('notLoggedIn')
  }
});

const changeState=(value)=>{
  setSignUpSignIn(value)
}

  return (
    <div className="App">
       
      <Nav stage={stage}/>
      {stage==='loggedIn' && <Feed/>}
      {stage ==='notLoggedIn' && signUpSignIn==="SI" && <SignIn changeState={changeState}/>}
      {stage==='notLoggedIn' && signUpSignIn==='SU' && <SignUp changeState={changeState}/>}
      
      
    </div>
  );
}

export default App

