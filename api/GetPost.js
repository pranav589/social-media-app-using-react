import {postRef} from '../firebase'


export default ()=>{
  console.log('into the func')
  postRef.once('value',snap=>{
    return snap.val()
  })
}

