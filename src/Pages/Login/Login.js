import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './login.css'
import {GiFruitBowl} from 'react-icons/gi'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../../redux/Actions/UserAction'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {loading,error,isAuthenticated,reDirectUrl} = useSelector(state=>state.auth)

    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const {email,password} = formValues;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      dispatch(login(formValues))
    };
  
    const handleChange =(e)=>{
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    }
  
    const validate=(values)=>{
      const errors={}
      const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
  
      
      if(!values.email){
        errors.email = "Email is required"
      }else if(!emailRegex.test(values.email)){
         errors.email = "Enter a valid email address"
      }
      if(!values.password){
        errors.password = "Password is required"
      }else if(!passwordRegex.test(values.password)){
        errors.password = "Incorrect password format"
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
             <form className="auth_form" onSubmit={handleSubmit}>
             <div className="auth_heading">
                Login Here
              </div>
              
              <div class="group">      
              <input type="text" required name="email" value={email} onChange={handleChange} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
              </div>
              <div className="error-message">{formErrors.email}</div>

              <div class="group">      
              <input type="password" required name="password" value={password} onChange={handleChange} />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
              </div>
              <div className="error-message">{formErrors.password}</div>

              <div className="error-message">{error && error}</div>
              <button className="auth_button">
              {loading ? <div className="lds-dual-ring"></div> : 'Login'}

              </button>
              <p>Didn't have an account? <Link to="/accounts/register">Create One</Link></p>
             </form>
            </div>
            
        </div>
    </div>
  )
}

export default Login