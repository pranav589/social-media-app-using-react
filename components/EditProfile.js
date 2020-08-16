import React, { useState } from "react";
import { firebaseApp,storageRef} from "../firebase";
import editUser from "../api/EditUser";

export default ({ changeToFalse, userDetails }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image,setImage]=useState("")
  

  const onSubmit = () => {
    const uid = firebaseApp.auth().currentUser.uid

    if(image){
      var uploadTask=storageRef.ref('image/${image.name}').put(image)
      uploadTask.on("state_changed",()=>{

      },(error)=>{
          console.log(error)
      },()=>{
         //adding url to db
         uploadTask.snapshot.ref.getDownloadURL().then(function(imageURL){
           console.log('File available at',downloadURL)
        
  
            const data = {
              uid,
              firstName,
              lastName,
              email:userDetails.email,
              imageURL
            };

            const result = editUser(data);

            if (result === true) {
              console.log("User Info Edited");
            }

            if (result === false) {
              console.log("ERROR");
            
            }
         })
      }
      )
        }else{
          const data={
            uid,
            firstName,
            lastName
          }

          const result=editUser(data)

          if(result===true){
            console.log('edited')
          }

          if(result===false){
            console.log("error")
          }
        }
      
  

  }
    return (
    <div>
      <div onClick={() => changeToFalse()}>Go Back</div>
      {image && (
        <img src={URL.createObjectURL(image)} alt="profile pic" height="40px" />
      )}
      <input type="file" onChange={event => setImage(event.target.files[0])} />
      <input
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}