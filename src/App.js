import React from "react";
//import logo from './logo.svg';
import photoAvatar from "./avatar1.png";
import photoAvatar2 from "./profile/avatar2.png";
import photoAvatar3 from "./profile/avatar5.jpg";
import "./App.css";

//import ActionClick from "./profile/ActionClick";
import Profiles from './profile/profileContainer'
//import ProfileContain from "./profile/profileContainer";
const profiles = [
  { fullName: "Med Fridhi",
   bio: "It is the bio Med", 
   profession: "Student",
   image:photoAvatar2,
  link:"Hello I am Med Fridhi",
 },
  {
    fullName: "Mejdi Fridhi",
    bio: "It is the bio Mejdi",
    profession: "Employé",
    image:photoAvatar,
    link:"hello I am Mejdi",
  },
  {
    fullName: "Amal Fridhi",
    bio: "It is the bio Amal",
    profession: "Teacher",
    image:photoAvatar3,
    link:"Hello I am Amal Fridhi",
  },
];
function App() {
  return (
    <div className="App">
      <Profiles className="Profiles " profiles={profiles} />
      
      <div> </div>
    </div>
  );
}

export default App;
