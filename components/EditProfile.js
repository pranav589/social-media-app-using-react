import React, { useState } from "react";
import { firebaseApp} from "../firebase";
import editUser from "../api/EditUser";

export default ({ changeToFalse, userDetails }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image,setImage]=useState("")
  

  const onSubmit = () => {
    const uid = firebaseApp.auth().currentUser.uid
            const data = {
              uid,
              firstName,
              lastName,
            
            };

            const result = editUser(data);

            if (result === true) {
              console.log("User Info Edited");
            }

            if (result === false) {
              console.log("ERROR");
            
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