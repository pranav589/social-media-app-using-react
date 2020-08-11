import React, { useEffect } from "react";

import {userRef} from './firebase'


function App() {
  useEffect(()=>{
    function callFunc(){
      userRef.set({
        Email:'xy@gmail.com',
        Password:'12345'
      })
    }
    callFunc()
  },[])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App

