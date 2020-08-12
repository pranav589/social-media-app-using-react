import firebase from 'firebase'


export default (email,password)=>{
  firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
    console.log('user added')
    return true
  }).catch((err)=>{
    console.log('error')
    return err
  })
}

