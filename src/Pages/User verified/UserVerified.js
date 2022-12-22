import React, { useEffect } from "react";
import "./userVerified.css";
import { useNavigate } from 'react-router-dom'

const UserVerified = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
          navigate('/profile/register')
        }, 2000)
      }, [])

  return (
    <div className="user_verified">
      <div className="auth_section">
        <div className="auth_details">
          <div className="auth_form_section">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <div className="success_heading">SUCCESS!!</div>
          <div className="success_message">Your account has been <br /> verified successfully</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVerified;
