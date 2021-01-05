import React,{useEffect,Fragment,useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { toast,ToastContainer } from "react-toastify";
import "../riders/node_modules/react-toastify/dist/ReactToastify.css"
import {Link,withRouter} from 'react-router-dom'

import { getCurrentProfile,updateProfile, } from '../../actions/profile';
import {updatePassword} from '../../actions/auth'
import profile from '../../reducers/profile';


toast.configure()
 const ViewProfile = ({getCurrentProfile,updateProfile,updatePassword   ,auth ,profile:{currentProfile,loading},history}) => {



    const [formData,setFormData] = useState({
      
        firstname:'',
        lastname:'',
        currentPassword:'',
        newPassword:'',
        confirmPassword:''
    });
 
    const {firstname,lastname,email,currentPassword,confirmPassword,newPassword} = formData




    useEffect(() => {
        getCurrentProfile();
     
        setFormData({
          firstname: loading || !currentProfile.user.firstname? '' : currentProfile.user.firstname,
          lastname: loading || !currentProfile.user.lastname ? '' : currentProfile.user.lastname,
          email:loading || !currentProfile.user.lastname ? '' : currentProfile.user.email

        });
      

      }, [loading,getCurrentProfile]);

    

      const onchange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }

  
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log("firstname,lastname")
        updateProfile(firstname,lastname,history)
     

    }
const handlePasswordSubmit=async(e)=>{
  e.preventDefault()
        // console.log("firstname,lastname")
        
      updatePassword(currentPassword,confirmPassword,newPassword,history)
      setFormData({
      
        currentPassword:'',
        newPassword:'',
        confirmPassword:''
    })
      // e.target.reset()
}

    
    return (
    

        
            <Fragment>
            
            {currentProfile !== null ? (
              <Fragment>
                 <div className="app-content user-management create-product content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <h3 className="pull-left bold uppercase black mt-2">Profile</h3>
              <div className="clearfix" />
              <h4 className="p_lg medium mt-1 poppins black lh">User Information</h4>
              <div className="clearfix" />
              <ul className="nav nav-pills mt-1 mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active px-3" id="pills-account-tab" data-toggle="pill" href="#pills-account" role="tab" aria-controls="pills-home" aria-selected="true">Account</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-3" id="pills-password-tab" data-toggle="pill" href="#pills-password" role="tab" aria-controls="pills-profile" aria-selected="false">Password</a>
                </li>
              </ul>
             
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
                <form onSubmit={e=>onSubmit(e)}>
                  <div className="row">

                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">First name<span className="red">*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="text" value={firstname}  required className="w-100" name="firstname" onChange={(e)=>onchange(e)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">Last name<span className="red">*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="text" value={lastname}  onChange={(e)=>onchange(e)} name="lastname" required  className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">Email<span className="red">*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="email" value={email} disabled={true} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="offset-xl-3 offset-lg-4 offset-sm-4 mt-1">
                          <a href><button type="submit"  className="ml-1 px-3 h-45 py-0 mt-2">Save</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab">
                <form onSubmit={(e=>handlePasswordSubmit(e))}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">Current Password<span className="red" required>*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="password" name="currentPassword" value={currentPassword} onChange={(e)=>onchange(e)} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">New Password<span className="red" required>*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="password"name="newPassword" value={newPassword}  onChange={(e)=>onchange(e)} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-4">
                          <p className="p_sm black medium">Confirm New Password<span className="red" required>*</span></p>
                        </div>
                        <div className="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                          <input type="password" name="confirmPassword"  value={confirmPassword} onChange={(e)=>onchange(e)} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="offset-xl-3 offset-lg-4 offset-sm-4 mt-1">
                          <a href><button type="submit" className="ml-1 px-3 h-45 py-0 mt-2">Save Password</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
           
            </section></div>

        </div>
        <div className="modal fade" id="logout" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right clr-orange mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="px-2 pb-5 text-center">
                <img src="images/alert.png" alt="" className="img-fluid" />
                <h3 className="jost bold mt-1 clr-orange">Alert</h3>
                <p className="d-blue mt-1 medium ">Are you sure you want to Logout?</p>
                <div className="d-flex flex-wrap justify-content-center">
                  <a href="admin-login.html"><button className="px-4 mx-1 py-1 mt-2">Yes</button></a>
                  <a href="#_"><button className="px-4 mx-1 py-1 mt-2" data-dismiss="modal" aria-label="Close">No</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Basic form layout section end */}
      </div>
                  
     
{/*                   
                  <div>
          
              
              
              
                  <div className="app-content content view home">
                  <div className="content-wrapper">
                    <div className="content-body"> 

                      <section id="configuration" className="search view-cause go_go_geezers_general">
                        <div className="row">
                          <div className="col-12">
                            <div className="card rounded pad-20">
                              <div className="card-content collapse show">
                                <div className="card-body  card-dashboard">
                                  <div className="row">
                                    <div className="col-md-12 col-12">
                                       
                                      <h1 className="u-m clr-blue ">
                                       
                                       View Profile</h1>
                       
                                    </div>
                                  
                                 
                                  </div>
                              
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="basic-detail-card">
                                                <div className="basic-detail-card-head">
                                                    <h2> View Profile </h2>
                                                </div>
                                                <div className="basic-details-sec pl-5">

                                                         <div className="row">
                                                             <div className="col-12">
                                                              <div className="wrapper-img">
                                                                 
                                                                           <div className="left-part">
                                                                             <div className="d-flex">
                                                                                 <div className="user-left">
                                                                                 <img src={currentProfile.user.image} height="100" width="100" style={{borderRadius:50}}   alt="" className="profileimg"/>
                                                                                 </div>
                                                                                 <div className="right-sec-user align-self-center">
                                                                                        <h6>{firstname +" "+lastname}</h6>
                                                                                 </div>
                                                                             </div>
                                                                           </div>
                                                                        
                                                        
                                                             </div>
                                                             </div>
                                                         </div>
                                                <form onSubmit={e=>onSubmit(e)}>

                                                         <div className="row">
                                                              
                                                              
                                                              <div className="col-lg-6">
                                                                  <h3 className="v-p-i">Personal Information</h3>
                                                                      <div className="row mb-2">
                                                                              <div className="col-lg-3 align-self-center">
                                                                                      <label htmlFor="">First Name:</label>
                                                                              </div>
                                                                              <div className="col-lg-5">
                                                                                  <input type="text" className="form-control basic-input" value={firstname} name="firstname" onChange={(e)=>onchange(e)}  placeholder="John"/>
                                                                              </div>
                                                                      </div>
                                                                      <div className="row mb-2">
                                                                              <div className="col-lg-3 align-self-center">
                                                                                  <label htmlFor="">Last Name: </label>
                                                                              </div>
                                                                              <div className="col-lg-5">
                                                                                  <input type="text" className="form-control basic-input" name="lastname" value={lastname} onChange={(e)=>onchange(e)} placeholder="Smith"/>
                                                                          </div>
                                                                      </div>
                                                                      <div className="row mb-2">
                                                                          <div className="col-lg-3 align-self-center">
                                                                              <label htmlFor="">Email: </label>
                                                                          </div>
                                                                          <div className="col-lg-5">
                                                                              <input type="email" className="form-control basic-input"  name="email" value={email} onChange={(e)=>onchange(e)} placeholder="abc@zyz.com" disabled/>
                                                                      </div>
                                                                      </div>
                                                                  
                                                              </div>
                                                          
                                                          
                                                          
              
                                                      
                                                          
                                                         </div>
                                                         <div className="row">
                                                             <div className="col-12">
                                                                      <button type="submit" className="blocked-button" >Update</button>
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
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              
              
              
              
              
                  </div>
                */}
                <ToastContainer autoClose={3000}/>
              </Fragment>
            
        
    
        

    ):'<h1>user Details doesonot found</h1>'

}
</Fragment>

)
}

ViewProfile.propTypes = {
    updateProfile:PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    updatePassword:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };


const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });
  
  export default connect(mapStateToProps, {updateProfile, getCurrentProfile,updatePassword })(withRouter(ViewProfile));


  