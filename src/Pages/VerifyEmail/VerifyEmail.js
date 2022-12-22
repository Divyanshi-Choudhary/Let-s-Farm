import React, { useEffect, useState } from 'react'
import { GiFruitBowl } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyVerificationCode } from '../../redux/Actions/UserAction'

const VerifyEmail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {error,loading,reDirectUrl} = useSelector(state=> state.email)

    const initialValues = { email: "", code:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const{email,code} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate=(values)=>{
    const errors={}
    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!values.email){
      errors.email = "Email is required"
    }else if(!emailRegex.test(values.email)){
       errors.email = "Enter a valid email address"
    }
    
    if(values.code < 6 || values.code > 6){
      errors.code = "Please enter a valid code"
    }else
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  return (
    <div className="verify_email">
         <div className="auth_section">
            <div className="auth_img">
             
            </div>
            <div className="auth_details">
             <form action="" className="auth_form" onSubmit={handleSubmit}>
             <div className="auth_heading">
                Email verification
              </div>
              <div class="group">      
              <input type="text" required value={email} name="email" onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
              </div>
              <div className="error-message">{formErrors.email}</div>

              <div class="group">      
              <input type="password" required value={code} name="code"  onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Code</label>
              </div>
              <div className="error-message">{formErrors.code}</div>

              <div className="error">{error && error}</div>
              <a href="#" className='resend_code_link' >Didn't recieve a code? Resend code</a>
              <button className="auth_button">
              {loading ? <div className="lds-dual-ring"></div> : 'Verify'}
              </button>
             </form>
            </div>
            
        </div>
    </div>

    )
}

export default VerifyEmail