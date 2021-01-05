import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from'prop-types'
import { ToastContainer } from "react-toastify";
import "../riders/node_modules/react-toastify/dist/ReactToastify.css";


import {login} from '../../actions/auth'

const Login = ({isAuthenticated,login},props) => {
// const [refresh, setstate] = useState(false)

    const [formData,setFormData] = useState({
      
        email:'',
        password:'',
 
    });

    const {email,password} = formData
    const onchange=(e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }

  
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log("email,password")
        // console.log(email,password)
        login(email,password)
     

    }
  

    //Redirect if logged int
    if(isAuthenticated){
      return <Redirect to="/dashboard"/>

    }
    return (
       <>
      <div class="pr-0">              
         {/* <section className="register loginn">

                  <div className="container">
                  <div className="card border-0 edit-profile-card ">
                    <div className="main-sec">
                      <div className="card-body p-0">
                        <div className="row m-0">
                          <div className="col-lg-6 p-0 d-flex">
                            <div className="login-wrapper  w-100">
                              <div className="logo-image text-center">
                                <img src="images/login-logo.png" alt="" className="login-img"/>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 p-0 d-flex w-100">
                            <div className="login-main-sec">
                              <div className="login-head text-center">
                                <h1>Login</h1>
                                <h3>Login To Your Account</h3>
                              </div>
                              <div className="form-main">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="img-div">
                                      <div className="img-div-inner"> </div>
                                    </div>
                                  </div>
                                </div>
                                
                            
                                <form onSubmit={e=>onSubmit(e)}>
                                  <div className="fields">
                                    <div className="row">
                                      <div className="col-md-12 email-input-sec mb-2">
                                        <i className="fa fa-envelope"></i><input type="text" className="form-control" spellCheck="true" value={email} name="email"  placeholder="Enter Email Address" onChange={(e)=>onchange(e)} required/>
                                      </div>
                                      <div className="col-md-12 email-input-sec pass-see-icon">
                                        <i className="fa fa-lock"></i><input type="password" spellCheck="true" className="form-control" value={password} name="password" placeholder="Enter Password" onChange={(e)=>onchange(e)} required />
                                        <div  className="eye-btn"><i className="fa fa-eye-slash"></i></div>
                                      </div>
                                    </div>
                                    <div className="remember-mer-sec-wrapper">
                                      <div className="d-flex d-block justify-content-between text-center">
                                        <div className="left-login-content align-self-center">
                                          <label className="check-box-container mb-0">Remember me
                                          <input type="checkbox" checked="" readOnly/>
                                          <span className="checkbox-checkmark"></span>
                                          </label>
                                        </div>
                                        <div className="right-login-content align-self-center"><Link to="/forgotpassword">Forgot Password?</Link></div>
                                          
                                   
                                      </div>
                                    </div>
                                    <button type="submit" className="form-control"><span>LOGIN</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></button>
                                  
                                    <div className="go-back-sec text-center">
                                      <a href="#"><i className="fa fa-arrow-left w-5" aria-hidden="true"></i>Back To Website</a>
                                      </div>
                            
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            </section> */}
            
            <div className="container-fluid admin-login pl-0">
               
        <div className="row">
          <div className="col-5 pr-0">
            <div className="admin-login-inner d-flex align-items-center justify-content-center">
              <img src={process.env.PUBLIC_URL+"/images/logo-bg.png"} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
          <form onSubmit={e=>onSubmit(e)}>
            <div className>
              <div className="admin-login-card w-100 p-5">
                <div className="text-left">
                  <h4 className="medium clr-orange">Login To Your Account</h4>
                  <hr className="blue_line bck-orange" />
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-envelope  input-prefix" />
                    <input type="text" id="prefixInside2" className="form-control py-2" value={email} name="email"  placeholder="Enter Email Address" onChange={(e)=>onchange(e)} required />
                  </div>
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-lock  input-prefix" />
                    <input type="text" id="prefixInside2" className="form-control py-2"value={password} name="password" placeholder="Enter Password" onChange={(e)=>onchange(e)} required />
                    <i className="fas fa-eye-slash hide-pass" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id name className="custom-check" defaultValue="Remember me" />
                      <label className=" p_md l-grey ml-2" htmlFor>Remember me</label>
                    </div>
                    <a href="password-recovery.html" className="clr-orange">Forgot Password?</a>
                  </div>
                 <button type="submit" className="w-100 mt-4">Login</button>
                  <div className="mt-5 text-center">
                    <a href="#_" className="medium clr_grey"><i className="fa fa-arrow-circle-left mr-2" /> Back
                      To Website</a>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        
        </div>
      </div>
            <ToastContainer autoClose={2000} />
</div>
            </>


   


    )
}


Login.propTypes={
 login:PropTypes.func.isRequired,
 isAuthenticated:PropTypes.bool 
}
const mapStateToProps = state =>({
isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login)
