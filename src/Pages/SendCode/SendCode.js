import React, { useEffect, useState } from 'react'
import { GiFruitBowl } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendVerificationCode } from '../../redux/Actions/UserAction'
import './sendcode.css'

const SendCode = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading,reDirectUrl,error} = useSelector(state=> state.email)
    const [email,setEmail] = useState('')

    const handleVerification =(e)=>{
       e.preventDefault();
       dispatch(sendVerificationCode(email))
       navigate(reDirectUrl)
    }

  return (
    <div className="send_code">
        <div className="auth_section">
            <div className="auth_img">
            </div>
            <div className="auth_details">
              <form action="" className="auth_form">
              <div className="auth_heading">
                Email verification
              </div>
              <div class="group">      
              <input type="text" required value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
              </div>
              <div className="error">{error && error}</div>
              <button className="auth_button" onClick={handleVerification}>
              {loading ? <div className="lds-dual-ring"></div> : 'Send'}
              </button>
              </form>
            </div>
            
        </div>
    </div>
  )
}

export default SendCode