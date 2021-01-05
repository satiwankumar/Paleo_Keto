import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavLink,Link, Redirect } from 'react-router-dom';
import {logout} from '../../actions/auth'
// import {getNotifications} from '../../actions/profile'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner';

 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { object } from 'joi';

const DasboardActions = ({auth:{isAuthenticated,loading,user},profile:{Notifications},logout}) => {

    let notifications = Notifications
    // console.log(notifications) 
   
  useEffect(() => {
    if(isAuthenticated){
    // getNotifications();
  }
  }, [isAuthenticated]);
  
  const toggleMenu = () => {
    document.querySelector('body').classList.toggle('menu-collapsed')
  }
// const getCount = ()=>{
//   let count = 0
//   if(Object.keys(notifications).length>0){
    
//     let newNotification  = notifications.map(noti  => noti.isread==false)
//      count= newNotification.length
//   }
//   return count
  
// }

  const authLinks = (

<div>
        <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top black_bck navbar-border">
          <div className="navbar-wrapper">
            <div className="navbar-header">
              <ul className="nav navbar-nav flex-row">
                <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu font-large-1" /></a></li>
                <li className="nav-item"> <a className="navbar-brand" href="dashboard.html"> <img className="brand-logo img-fluid logo ml-0" alt="stack admin logo" src={process.env.PUBLIC_URL+"/images/logo-bg.png"} /> </a> </li>
                <li className="nav-item d-md-none"> <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" /></a> </li>
              </ul>
            </div>
            <div className="navbar-container content">
              <div className="collapse navbar-collapse" id="navbar-mobile">
                <ul className="nav navbar-nav mr-auto float-left">
                </ul>
                <ul className="nav navbar-nav float-right">
                  <li className="dropdown dropdown-user nav-item"> <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> <span className="avatar avatar-online"> <img src={process.env.PUBLIC_URL+"/app-assets/images/portrait/small/avatar-s-1.png"} alt="avatar" /> </span> <span className="user-name">{user && user.firstname +" "+ user.lastname} <i className="fas ml-1 fa-angle-down" /></span></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/profile"><i className="fas fa-user-circle" />Profile</Link>
                      <Link className="dropdown-item"  data-toggle="modal" data-target="#logout"><i className="fas fa-sign-out-alt" />Logout</Link>
                    </div>
                  </li>
                  <li className="nav-item d-none d-md-block"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* ////////////////////////////////////////////////////////////////////////////*/}
        <div className="main-menu menu-fixed mt-2 menu-light black_bck menu-accordion" data-scroll-to-active="true">
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
              <li className="nav-item mt-1 active"><Link to="/dashboard"><img src={process.env.PUBLIC_URL+"/images/home-icon.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>Dashboard</span></Link></li>
              <li className=" nav-item mt-1">
                <Link to="product-inventory.html"><img src={process.env.PUBLIC_URL+"/images/products-icon.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>products</span></Link>
                <ul>
                  <li><Link to="product-inventory.html"><img src={process.env.PUBLIC_URL+"/images/inventory.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>inventory</span></Link></li>
                  <li><Link to="/product/categories"><img src={process.env.PUBLIC_URL+"/images/categories.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>categories</span></Link></li>
                  <li><Link to="product-reviews.html"><img src={process.env.PUBLIC_URL+"/images/reviews.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>reviews</span></Link></li>
                </ul>
              </li>
              <li className=" nav-item mt-1">
                <Link to="orders.html"><img src={process.env.PUBLIC_URL+"/images/shopping-bag.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>orders</span></Link>
                <ul>
                  <li><Link to="orders.html"><img src={process.env.PUBLIC_URL+"/images/white-cart.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>orders</span></Link></li>
                  <li><Link to="payments.html"><img src={process.env.PUBLIC_URL+"/images/payments.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>payments</span></Link></li>
                </ul>
              </li>
              <li className=" nav-item mt-1"><Link to="/users"><img src={process.env.PUBLIC_URL+"/images/user-icon.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>users</span></Link></li>
              <li className="nav-item mt-1"><Link to="/riders"><img src={process.env.PUBLIC_URL+"/images/bicycle.png"} alt="" className="img-fluid" /><span className="menu-title ml-1" data-i18n>riders</span></Link></li>
              <li className=" nav-item mt-1"><Link to="/feedback"><img src={process.env.PUBLIC_URL+"/images/thumbs-up.png"} alt="" className="img-fluid" /><span className="menu-title ml-2" data-i18n>feedback</span></Link></li>
            </ul>
          </div>
        </div>
      </div>


  )

  return (
    <div>
   
{!loading && (<Fragment>{isAuthenticated?authLinks:<Redirect to="/" />}</Fragment>)}

   
    </div>
    
  );
};

DasboardActions.propTypes = {
  logout:PropTypes.func.isRequired,
  getNotifications:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
};


const mapStateToProps=state=>({
  auth:state.auth,
  profile: state.profile
})

export default connect(mapStateToProps,{logout})(DasboardActions)

