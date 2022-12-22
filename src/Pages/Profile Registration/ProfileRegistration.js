import React, { useState } from 'react'
import './profileregistration.css'
import {MdPostAdd,MdAddCircle} from 'react-icons/md'
import image from '../../assets/profile-default-image.jpg'


const ProfileRegistration = () => {

  const [profileImage,setProfileImage]= useState(image)
  const [userData,setUserData] = useState({})

   const handleImage = (e) =>{
    const reader = new FileReader();
    reader.onload=()=>{
      if(reader.readyState === 2){
        setProfileImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
}
console.log(profileImage)
  return (
<>
<div className="registration">
  <div className="main_heading">
    <span>profile registration</span>
  </div>
  <form action="">
    <div className="media_section">
    <div className="title">
          Upload Profile Image
        </div>
      <div className="img_upload">
        <div className="profile_image_container">
        <img src={profileImage} alt="" />
        </div>
        <div className="img_add_btn">
          <MdAddCircle size={40}/>
          <input type="file" onChange={handleImage}/>
        </div>
      </div>
      <div className="certificate_section">
        <div className="title">
          Upload Certificate
        </div>
        <label> <MdPostAdd/> Enter Your File
    <input type="file" size="60" />
    </label> 
      </div>
    </div>
    <div className="detail_section">
      <div className="name_group">
        <div className="title">
          Name
        </div>
        <div className="name_input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Middle Name" />
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="address_group">
        <div className="title">
          Address
        </div>
        <div className="address_input_r one">
          <input type="text" placeholder="House No."/>
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
        </div>
        <div className="address_input_r two">
          <input type="text" placeholder="PIN Code" />
          <input type="text" placeholder="State"/>
          <input type="text" placeholder="Country"/>
        </div>
      </div>
      <div className="aadhar_group">
        <div className="title">
          Aadhaar Card Number
        </div>
        <input type="text" placeholder="Enter Aadhaar ID"/>
      </div>
      <div className="contact_group">
        <div className="title">
          Contact
        </div>
        <div className="contact_input">
        <input type="text" placeholder="Contact Number"/>
        <input type="text" placeholder="Email"/>
        </div>
      </div>
      <div className="register_button">
        <div className="cancel_btn">Cancel</div>
       <div className="submit_btn">Add</div>
      </div>
    </div>
  </form>

</div>
</>  )
}

export default ProfileRegistration