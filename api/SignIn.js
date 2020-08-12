import firebase from 'firebase'


export default (email,password)=>{
  firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
    console.log(user)
    console.log('user signed in')
    return true
  }).catch((err)=>{
    console.log(err.message)
    console.log('error')
    return err
  })
}

