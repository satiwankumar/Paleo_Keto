
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import ReactPaginate from 'react-paginate';
import { getCategories } from '../../actions/category';
import {Link } from 'react-router-dom'
// import UserItem from './userItem';
import Pagination from '../paginate/paginate';
import { ToastContainer } from "react-toastify";
import CategoryItem from './CategoryItem';


const Category = ({ getCategories, category: {Categories, loading }, history }) => {


  const [currentID, setCurrentID] = useState('')
  const [Selection, setSelection] = useState(1)
  const [blockStatus, setBlockStatus] = useState(1)
  const [OrderState,setOrderState] = useState(1)

  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     

   const blockToggleUser = (id,status) => {
     setCurrentID(id)
    
     setBlockStatus(status)

     window.jQuery('#blockuser').modal('show');
   }

  useEffect(() => {
// alert(Selection)
    getCategories(page,limit,Selection);
  }, [getCategories,page,limit,Selection]);


  
  const toggleOrder=()=>{
    const currentState = OrderState ===1?-1:1
      setOrderState(currentState)
      return OrderState
  }
  const handleSelection=()=>{
    const currentState = Selection==1?0:1
      setSelection(currentState)
      return Selection
  }
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
          <h3 className="pull-left bold uppercase black mt-2">Products</h3>
          <div className="clearfix" />
          <h3 className="pull-left medium p_lg black mt-2">Category Management</h3>
          <div className="clearfix" />
          <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center flex-wrap">
              <p className="grey">Show</p>
              <input type="number" className="namber ml-1" name id />
              <p className="grey ml-1">Entries</p>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              <a href="add-category.html"><button className="px-5 h-45 py-0">Add</button></a>
              <input type="text" className="ml-1 px-1 h-45 py-0" name id placeholder="Search" />
            </div>
          </div>
          <div className="card jost pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="clearfix" />
                <div className>
                  <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table text-center table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                          <thead>
                            <tr role="row"><th className="d-grey bold sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.NO: activate to sort column descending" style={{width: '149.812px'}}>S.NO</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Product name: activate to sort column ascending" style={{width: '412.812px'}}>Product name</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="price: activate to sort column ascending" style={{width: '178.812px'}}>price</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="status: activate to sort column ascending" style={{width: '213.812px'}}>status</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="added on: activate to sort column ascending" style={{width: '283.812px'}}>added on</th><th className="d-grey text-center bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending" style={{width: '215.812px'}}>Action</th></tr>
                          </thead>
                          {Categories&&
           Object.keys(Categories).length > 0 ? (
            Categories.data.map((item,index) => (
           <CategoryItem key={item._id} data={item} currentPage={Categories.currentPage} index={index} />
         ))
       ) : (
         <h4>No  found...</h4>
       )
     }
                            
                        </table>
                        
                        
                        </div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                </div>
                <div className="modal fade" id="inactivatecateg" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered " role="document">
                    <div className="modal-content">
                      <button type="button" className="close text-right clr-orange mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="px-2 pb-5 text-center">
                        <img src="images/alert.png" alt="" className="img-fluid" />
                        <h3 className="jost bold mt-1 clr-orange">Alert</h3>
                        <p className="d-blue mt-1 medium ">Are you sure you want to Inactivate Abc Category?</p>
                        <div className="d-flex flex-wrap justify-content-center">
                          <a href="#_" data-toggle="modal" data-target="#blockuseradded" data-dismiss="modal" aria-label="Close"><button className="px-4 mx-1 py-1 mt-2">Yes</button></a>
                          <a href="#_" data-dismiss="modal" aria-label="Close"><button className="px-4 mx-1 py-1 mt-2">No</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
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
//         <Fragment>
      
//           <div className="app-content content view home">
//             <div className="content-wrapper">
//               <div className="content-body">
//                 <section
//                   id="configuration"
//                   className="search view-cause go_go_geezers_general"
//                 >
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="card rounded pad-20">
//                         <div className="card-content collapse show">
//                           <div className="card-body  card-dashboard">
//                             <div className="row">
//                               <div className="col-md-12 col-12">
//                                 <h1 className="u-m clr-blue ">Users </h1>
//                               </div>
//                               <div className="col-md-12 pull-right">
//                               <a
//                                   href="javascript:void(0)"
//                                   className="primary-button pull-right"
                                  
//                                   onClick={handleSelection}
//                                     // handlePageClick(1)
                                
//                                 >
//                                  {Selection==1? "Blocked Users":"Active Users"}
//                                  </a>
//                               </div>
//                             </div>



// <div className="maain-tabble mt-3 table-responsive">
// <div
//   id="DataTables_Table_0_wrapper"
//   className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
// >
//   <div className="row">
//     <div className="col-sm-12 col-md-6">
//       <div
//         className="dataTables_length"
//         id="DataTables_Table_0_length"
//       >
//         <label>
//           Show{' '}
//           <select
//             name="DataTables_Table_0_length"
//             aria-controls="DataTables_Table_0"
//             className="form-control form-control-sm"
//             onChange={(e) => handleChange(e)}
//           >
//             <option value={10}>10</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//             <option value={100}>100</option>
//           </select>{' '}
//           entries
//         </label>
//       </div>
//     </div>
//     <div className="col-sm-12 col-md-6">
//       <div
//         id="DataTables_Table_0_filter"
//         className="dataTables_filter"
//       >
//         <label>
//           Search:
//           <input
//             spellCheck="true"
//             type="search"
//             className="form-control form-control-sm"
//             placeholder="Search"
//             aria-controls="DataTables_Table_0"
//           />
//         </label>
//       </div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-sm-12">
//       <table
//         className="table table-striped table-bordered zero-configuration dataTable no-footer"
//         id="DataTables_Table_0"
//         role="grid"
//         aria-describedby="DataTables_Table_0_info"
//       >
//         <thead>
//           <tr role="row">
//             {/* <th
//               className="sorting_asc"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-sort="ascending"
//               aria-label="S.no: activate to sort column descending"
//               style={{ width: '54px' }}
//             >
//               S.no
//             </th> */}
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="User ID: activate to sort column ascending"
//               style={{ width: '78px' }}
              
//             >
//               User ID
//             </th>
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="Full Name: activate to sort column ascending"
//               style={{ width: '107.6px' }}
//               onClick={()=>SortAction("firstname",toggleOrder())}
//             >
//               First Name
//             </th>
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="Last Name: activate to sort column ascending"
//               style={{ width: '110px' }}
//               onClick={()=>SortAction("lastname",toggleOrder())}
//             >
//               Last Name
//             </th>
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="Email: activate to sort column ascending"
//               style={{ width: '154.8px' }}
//               onClick={()=>SortAction("email",toggleOrder())}
//             >
//               Email
//             </th>
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="Status: activate to sort column ascending"
//               style={{ width: '78px' }}
//               onClick={()=>SortAction("status",toggleOrder())}
//             >
//               Status
//             </th>
//             <th
//               className="sorting"
//               tabIndex={0}
//               aria-controls="DataTables_Table_0"
//               rowSpan={1}
//               colSpan={1}
//               aria-label="Action: activate to sort column ascending"
//               style={{ width: '78px' }}
//             >
//               Action
//             </th>
//           </tr>
//         </thead>
//         {Users&&
//            Object.keys(Users).length > 0 ? (
//             Users.data.map((user,index) => (
//            <UserItem key={user._id} blockToggle={blockToggleUser} user={user} currentPage={Users.currentPage} index={index} selection={Selection}/>
//          ))
//        ) : (
//          <h4>No User found...</h4>
//        )
//      }
//                            {/* <Pagination
//      ItemsPerPage={UsersPerPage}
//      TotalItems={Users.length}
//      paginate={paginate}
//    /> */}
//       </table>
//     </div>
//   </div>
//   <div class="col-12">
//                       <ul class="noti-pagination pagination pull-right">
//                                                         <ReactPaginate
//                                                             containerClassName="pagination"
//                                                             pageClassName="paginate_button page-item"
//                                                             pageLinkClassName="page-link"
//                                                             activeClassName="active"
//                                                             previousClassName="page-item previous"
//                                                             previousLinkClassName="page-link"
//                                                             nextClassName=" page-item next"
//                                                             nextLinkClassName="page-link"
//                                                             activeLinkClassName="active"
//                                                             previousLabel={'previous'}
//                                                             nextLabel={'next'}
//                                                             breakLabel={'...'}
//                                                             breakClassName={'break-me'}
//                                                             pageCount={Users.total?Users.total:null}
//                                                             marginPagesDisplayed={2}
//                                                             pageRangeDisplayed={Users.perPage?Users.perPage:null}
//                                                             onPageChange={handlePageClick}
//                                                             containerClassName={'pagination'}
//                                                             subContainerClassName={'pages pagination'}
//                                                             activeClassName={'active'}
//                                                         />
//                                                         </ul>
//                                                         </div>
// </div>
// </div>


                           
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>

              
//               </div>
//             </div>
//           </div>

//           <div
//             className="modal fade go-live"
//             id="blockuser"
//             tabindex="-1"
//             role="dialog"
//             aria-labelledby="modelTitleId"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-label="Close"
//                   >
//                     <i className="fa fa-times-circle"></i>
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="blocked-modal-main-wrapper text-center">
//                     <div className="img-wrapper text-center">
//                       <img src="images/blockeduser.png" alt="" />
//                       <h2>System Message </h2>
//                       <p>Are you sure you want to block this user?</p>
//                     </div>
                
//                     <a
//                       data-toggle="modal"
//                       href="#confirmmodal"
//                       className="cancel-button go-live-btn"
                    
//                       onClick={()=>{UpdateUserStatus(currentID,blockStatus,history)}}
//                     >
//                       {' '}
//                       Yes
//                     </a>
//                     <button
//                       data-dismiss="modal"
//                       className="blocked-button "
//                     >
//                       No
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </Fragment>
        
      )}
    </Fragment>
  );
};

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  


};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getCategories })(Category);
