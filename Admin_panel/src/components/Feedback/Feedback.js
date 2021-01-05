
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import ReactPaginate from 'react-paginate';
import { getFeedbacks,SortAction } from '../../actions/feedback';
import {Link } from 'react-router-dom'
import FeedbackItem from './FeedbackItem';
import Pagination from '../paginate/paginate';
import { ToastContainer } from "react-toastify";


const Feedback = ({ getFeedbacks,SortAction,feedbacks:{loading,Feedbacks}}) => {


  const [currentID, setCurrentID] = useState('')
  const [OrderState,setOrderState] = useState(1)
  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     


  useEffect(() => {
// alert(Selection)
getFeedbacks(page,limit)
  }, [getFeedbacks,page,limit]);


  
  const toggleOrder=()=>{
    const currentState = OrderState ===1?-1:1
      setOrderState(currentState)
      return OrderState
  }
//   const handleSelection=()=>{
//     const currentState = Selection==1?0:1
//       setSelection(currentState)
//       return Selection
//   }
  const handleChange=(e)=> {
    // alert(e.target.value)
    let value = e.target.value;
    
   setlimit(value)
}
const handlePageClick = (data) => {
  
    let selected = data.selected +1;
    // console.log(selected)
    setPage(selected);
   
};
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
   <div className="app-content user-management content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
            </section></div>
          <h3 className="pull-left bold uppercase black mt-2">Feedback</h3>
          <div className="clearfix" />
          <h3 className="pull-left mt-2 medium p_lg black">Feedback Listing</h3>
          <div className="clearfix" />
          <div className="d-flex mt-1 align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center flex-wrap">
              <p className="grey">Show</p>
              <input type="number" className="namber ml-1" name id />
              <p className="grey ml-1">Entries</p>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              <input type="text" className="ml-1 px-1 h-45 py-0" name id placeholder="Enter Order id" />
            </div>
          </div>
          <div className="card poppins pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="clearfix" />
                <div className>
                  <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                          <thead>
                            <tr role="row"><th className="d-grey bold sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.NO: activate to sort column descending" style={{width: '149.812px'}}>S.NO</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="User Name: activate to sort column ascending" style={{width: '313.812px'}}>User Name</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Email: activate to sort column ascending" style={{width: '521.812px'}}>Email</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending" style={{width: '273.812px'}}>Date</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="action: activate to sort column ascending" style={{width: '214.812px'}}>action</th></tr>
                          </thead>
                          {Feedbacks&&
           Object.keys(Feedbacks).length > 0 ? (
            Feedbacks.data.map((item,index) => (
           <FeedbackItem key={item._id} data={item} currentPage={Feedbacks.currentPage} index={index} />
         ))
       ) : (
         <h4>No User found...</h4>
       )
     }
                  
                        </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deletefeedback" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right clr-orange mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="px-2 pb-5 text-center">
                <img src="images/alert.png" alt="" className="img-fluid" />
                <h3 className="jost bold mt-1 clr-orange">Alert</h3>
                <p className="d-blue mt-1 medium ">Are you sure you want to Delete this Feedback?</p>
                <div className="d-flex flex-wrap justify-content-center">
                  <a href data-toggle="modal" data-target="#feedbackdeleted"><button className="px-4 mx-1 py-1 mt-2">Yes</button></a>
                  <a href="feedback.html"><button className="px-4 mx-1 py-1 mt-2">No</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="feedbackdeleted" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right clr-orange mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="px-2 pb-5 text-center">
                <img src="images/alert.png" alt="" className="img-fluid" />
                <h3 className="jost bold mt-1 clr-orange">Alert</h3>
                <p className="d-blue mt-1 medium ">Feedback has been Deleted</p>
                <div className="d-flex flex-wrap justify-content-center">
                  <a href="feedback.html"><button className="px-4 mx-1 py-1 mt-2">Got It</button></a>
                </div>
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
       </>
     
  )}
  </Fragment>
  )
};

Feedback.propTypes = {
  getUsers: PropTypes.func.isRequired,



};

const mapStateToProps = (state) => ({
  feedbacks: state.feedback,
});

export default connect(mapStateToProps, { getFeedbacks,SortAction })(Feedback);
