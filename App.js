import React, { useEffect,useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import {firebaseApp} from './firebase'

import SignIn from './components/SignInComp'
import SignUp from './components/SignUpComp'
import Feed from './components/FeedComp'
import Nav from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProfilePage from './components/ProfilePage'


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
    setSignUpSignIn('SI')
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
      <Router>
      
      <Route path='/' exact>
      {stage==='loggedIn' && <Feed/>}
      {stage ==='notLoggedIn' && signUpSignIn==="SI" && <SignIn changeState={changeState}/>}
      {stage==='notLoggedIn' && signUpSignIn==='SU' && <SignUp changeState={changeState}/>}
      </Route>
      <Route path='/:uid'>
         <div><ProfilePage/></div>
      </Route>
      </Router>
      
    </div>
  );
}

export default App

