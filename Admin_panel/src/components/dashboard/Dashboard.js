import React,{useEffect, Fragment, useState} from 'react'
import {Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Bar } from "react-chartjs-2";
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May' ,'june' ,'july','august','september','october','november','december'],
  datasets: [
    {
      label: 'No of Requests',
      data: [3, 2, 2, 6, 4,5,4,5,4,8,4,6,4],
      borderColor: [
        'rgba(0, 0, 0, 0.7)',
        'rgba(0, 0, 0, 0.7)'
        
],
      backgroundColor: [
        'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)',
       'rgba(51, 51, 51)',
       ' rgb(75,0,130)'
        
      ]
    }
    // {
    //   label: '',
    //   data: [4, 3, 2, 2, 3],
    //   borderColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ],
    //   backgroundColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ]
    // }
  ]
}

const options = {
  title: {
    display: true,
    text: 'Bar Chart'
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 6,
          stepSize: 1
        }
      }
    ]
  }
}

const Dashboard = () => {

    return(
        <div className="app-content user-management content">
         <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12">
                <div className="clearfix" />
                <div className="row">
                  <div className="col-xl-3 col-md-6 mt-3">
                    <div className="dash-card-inner black h-100 py-2 px-1">
                      <h3>Total Sales</h3>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <img src={process.env.PUBLIC_URL+"/images/bill.png"} alt="" className="img-fluid mt-1" />
                        <h3 className="mt-1">$562,949.24</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mt-3">
                    <div className="dash-card-inner black h-100 py-2 px-1">
                      <h3>Total Orders</h3>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <img src={process.env.PUBLIC_URL+"/images/cart.png"} alt="" className="img-fluid mt-1" />
                        <h3 className="mt-1">314</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mt-3 mx-auto">
                    <div className="dash-card-inner black h-100 py-2 px-1">
                      <h3>Total Products</h3>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <img src={process.env.PUBLIC_URL+"/images/boxes.png"} alt="" className="img-fluid mt-1" />
                        <h3 className="mt-1">52</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mt-3 mx-auto">
                    <div className="dash-card-inner black h-100 py-2 px-1">
                      <h3>Total Customers</h3>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <img src={process.env.PUBLIC_URL+"/images/users.png"} alt="" className="img-fluid mt-1" />
                        <h3 className="mt-1">453</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  pad-20 mt-2 rounded-0">
              <div className="card-content collapse show">
                <div className="card-body table-responsive card-dashboard">
                  <h1 className="pull-left black bold mt-2"><i className="fas fa-chart-bar" /> Sales Analytics</h1>
                  <div className="bottom tickets mt-5">
                    <div className="chart-main position-relative">
                      <div className="row">
                        <div className="col-12 col-xl-11">
                          <div className="card-body">
                            <div className="height-400 echart-container" id="basic-column" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></div>
        <div className="card jost pad-20 mt-2 rounded-1">
          <div className="card-content collapse show">
            <div className="card-body table-responsive card-dashboard">
              <h3 className="pull-left black mt-2"><i className="fas fa-shopping-cart" /> Latest Orders</h3>
              <div className="clearfix" />
              <div className="clearfix" />
              <div className>
                <table className="table table-striped table-bordered zero-configuration">
                  <thead>
                    <tr>
                      <th className="d-grey bold">S.NO</th>
                      <th className="d-grey bold">Order Id</th>
                      <th className="d-grey bold">customer</th>
                      <th className="d-grey bold">status</th>
                      <th className="d-grey bold">total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0">Pending</td>
                      <td className="py-0">$163</td>
                    </tr>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0">Pending</td>
                      <td className="py-0">$163</td>
                    </tr>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0"> Pending</td>
                      <td className="py-0">$163</td>
                    </tr>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0">Pending </td>
                      <td className="py-0">$163</td>
                    </tr>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0">Pending</td>
                      <td className="py-0">$163</td>
                    </tr>
                    <tr>
                      <td className="py-0">01</td>
                      <td className="py-0">454</td>
                      <td className="py-0">Bran</td>
                      <td className="py-0">Pending</td>
                      <td className="py-0">$163</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="logout" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right clr-orange mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="px-2 pb-5 text-center">
                <img src={process.env.PUBLIC_URL/"images/alert.png"} alt="" className="img-fluid" />
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
      </div>
      </div>
      
    )


        

}

Dashboard.propTypes = {
   
}

const mapStateToProps =(state)=>({
    
    auth : state.auth,
   
})

export default connect(mapStateToProps,{})(withRouter(Dashboard))
