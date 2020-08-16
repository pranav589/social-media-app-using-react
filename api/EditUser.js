import { userRef } from "../firebase";

export default ({ uid, firstName, lastName, imageURL, email }) => {
  userRef.child(uid).set({
  
    firstName,
    lastName,
    
  });
};