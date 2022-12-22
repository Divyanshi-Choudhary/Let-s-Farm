import React, { useState } from 'react'
import './register.css'
import {GiFruitBowl} from 'react-icons/gi'
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { register } from '../../redux/Actions/UserAction'


const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuthenticated,loading,error,reDirectUrl} = useSelector(state=>state.auth)
  const initialValues = { fullName: "", email: "", phone:"", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {fullName,phone,email,password} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    dispatch(register(fullName, phone, email, password));
  };

  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate=(values)=>{
    const errors={}
    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


    if(values.fullName > 2){
      errors.fullName= "Full Name is should contain atleast 2 characters"
    }
    if(!values.email){
      errors.email = "Email is required"
    }else if(!emailRegex.test(values.email)){
       errors.email = "Enter a valid email address"
    }
    if(!values.phone){
      errors.phone = "Phone Number is required"
    }else if(values.phone.length < 10 || values.phone.length > 10){
      errors.phone = "Phone number should contain 10 numbers"
    }else if(!phoneRegex.test(values.phone)){
      errors.phone = "Enter a valid phone number"
    }
    if(!values.password){
      errors.password = "Password is required"
    }else if(!passwordRegex.test(values.password)){
      errors.password = "Password should have 6 to 16 characters, atleast a number, atleast a special character"
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if(isAuthenticated){
        navigate(reDirectUrl)
      }
    }
  }, [formErrors,isAuthenticated,error,reDirectUrl,loading]);

  return (
    <div>
        <div className="auth_section">
        <div className="auth_img">
          
            </div>
            <div className="auth_details">
            <form action="" className="auth_form" onSubmit={handleSubmit}>
            <div className="auth_heading">
                Register
              </div>
              <div class="group">      
              <input type="text" required value={fullName} name="fullName" onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Full Name</label>
              </div>
               <div className="error-message">{formErrors.fullName}</div>
              <div class="group">      
              <input type="text" required value={email} name="email" onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
              </div>
              <div className="error-message">{formErrors.email}</div>

              <div class="group">      
              <input type="text" required value={phone} name="phone" onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Phone</label>
              </div>
              <div className="error-message">{formErrors.phone}</div>


              <div class="group">      
              <input type="password" required value={password} name="password"  onChange={handleChange}/>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
              </div>
              <div className="error-message">{formErrors.password}</div>


              <div className="error">{error && error}</div>
              <button className="auth_button">
                {loading ? <div className="lds-dual-ring"></div> : 'Register'}
              </button>
              <p>Already have an account? <Link to="/accounts/signIn">Login</Link></p>
            </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default Register