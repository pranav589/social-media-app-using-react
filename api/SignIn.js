import {firebaseApp,userRef} from '../firebase'


export default (email,password)=>{
  console.log('into the func')
  firebaseApp.auth().signInWithEmailAndPassword(email,password).then((data)=>{
    console.log(data.user)
    userRef.child(data.user.uid).once('value',(snap)=>{
      console.log(snap.val())
      return snap.val()
    })
  }).catch((err)=>{
    console.log(err.message)
    console.log('error')
    return err
  })
}

