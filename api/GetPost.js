import {postRef} from '../firebase'


export default async ()=>{
  console.log('into the func')
  var data;
  await postRef.once('value',snap=>{
    data=snap.val()
    
  })
  return data
}

