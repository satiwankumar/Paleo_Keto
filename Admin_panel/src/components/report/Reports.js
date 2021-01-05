
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getReports } from '../../actions/reports';
import ReportItem from './ReportItem';





const Reports = ({ getReports, reports: { ReportsData, loading } }) => {


  // const [currentID, setCurrentID] = useState('')
  // const [Selection, setSelection] = useState(1)
  const [OrderState,setOrderState] = useState(1)
  let [pages, setPage] = useState(1)
  let [limits,setlimit] = useState(10)
  useEffect(() => {
    // alert(page,limit,Selection)
    getReports(pages,limits);
      },[getReports,pages,limits]);
    
    
      
      const toggleOrder=()=>{
        const currentState = OrderState ===1?-1:1
          setOrderState(currentState)
          return OrderState
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

  useEffect(() => {
    getReports();
  }, [getReports]);


  // const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
          
        <Fragment>
          
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
                            <h1 className="u-m clr-blue ">report</h1>
             
                          </div>
                         
                        </div>
    

<div className="maain-tabble mt-3 table-responsive">
<div
  id="DataTables_Table_0_wrapper"
  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
>
  <div className="row">
    <div className="col-sm-12 col-md-6">
      <div
        className="dataTables_length"
        id="DataTables_Table_0_length"
      >
        <label>
          Show{' '}
          <select 
            name="DataTables_Table_0_length"
            aria-controls="DataTables_Table_0"
            className="form-control form-control-sm"
            onChange={(e) => handleChange(e)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            
          </select>{' '}
          entries
        </label>
      </div>
    </div>
    <div className="col-sm-12 col-md-6">
      <div
        id="DataTables_Table_0_filter"
        className="dataTables_filter"
      >
        <label>
          Search:
          <input
            spellCheck="true"
            type="search"
            className="form-control form-control-sm"
            placeholder="Search"
            aria-controls="DataTables_Table_0"
          />
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12">
      <table
        className="table table-striped table-bordered zero-configuration dataTable no-footer"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            {/* <th
              className="sorting_asc"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-sort="ascending"
              aria-label="S.no: activate to sort column descending"
              style={{ width: '54px' }}
            >
              S.no
            </th> */}
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="User ID: activate to sort column ascending"
              style={{ width: '78px' }}
            >
           
            Report ID
          
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Full Name: activate to sort column ascending"
              style={{ width: '107.6px' }}
            >
            Reporting User
           
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Last Name: activate to sort column ascending"
              style={{ width: '110px' }}
            >
            Reported User
            
            </th>
           
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Action: activate to sort column ascending"
              style={{ width: '78px' }}
            >
              Action
            </th>
          </tr>
        </thead>
        {
          ReportsData&& Object.keys(ReportsData).length > 0 ? (
            ReportsData.data.map((report,index) => (
              <ReportItem key={report._id} report={report} index={index}/>
         ))
       ) : (
         <h4>No report found...</h4>
       )
     }
        {
      //     Reports.length > 0 ? (
      //         currentReports.map((report,index) => (
      //      <ReportItem key={report._id} report={report} index={index}/>
      //    ))
      //  ) : (
      //    <h4>No Reports found...</h4>
      //  )
     }
       {/* <Pagination
     ItemsPerPage={ReportsPerPage}
     TotalItems={currentReports.length}
     paginate={paginate}/>
   */}

      </table>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12 col-md-5">
      <div
        className="dataTables_info"
        id="DataTables_Table_0_info"
        role="status"
        aria-live="polite"
      >
        Showing 1 to 3 of 3 entries
      </div>
    </div>
    <div className="col-sm-12 col-md-7">
    <div className="col-12">
                      <ul className="noti-pagination pagination pull-right">
                                                        <ReactPaginate
                                                            containerClassName="pagination"
                                                            pageClassName="paginate_button page-item"
                                                            pageLinkClassName="page-link"
                                                            activeClassName="active"
                                                            previousClassName="page-item previous"
                                                            previousLinkClassName="page-link"
                                                            nextClassName=" page-item next"
                                                            nextLinkClassName="page-link"
                                                            activeLinkClassName="active"
                                                            previousLabel={'previous'}
                                                            nextLabel={'next'}
                                                            breakLabel={'...'}
                                                            breakClassName={'break-me'}
                                                            pageCount={ReportsData.total}
                                                            marginPagesDisplayed={2}
                                                            pageRangeDisplayed={ReportsData.currentPage}
                                                            onPageChange={handlePageClick}
                                                            containerClassName={'pagination'}
                                                            subContainerClassName={'pages pagination'}
                                                            activeClassName={'active'}
                                                        />
                                                        </ul>
</div>
      {/* <div
        className="dataTables_paginate paging_simple_numbers"
        id="DataTables_Table_0_paginate"
      >
        <ul className="pagination">
          <li
            className="paginate_button page-item previous disabled"
            id="DataTables_Table_0_previous"
          >
            <a
              href="#"
              aria-controls="DataTables_Table_0"
              data-dt-idx={0}
              tabIndex={0}
              className="page-link"
            >
              Previous
            </a>
          </li>
          <li className="paginate_button page-item active">
            <a
              href="#"
              aria-controls="DataTables_Table_0"
              data-dt-idx={1}
              tabIndex={0}
              className="page-link"
            >
              1
            </a>
          </li>
          <li
            className="paginate_button page-item next disabled"
            id="DataTables_Table_0_next"
          >
            <a
              href="#"
              aria-controls="DataTables_Table_0"
              data-dt-idx={2}
              tabIndex={0}
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </div> */}
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
         </Fragment>
          
    
    )}
          
    </Fragment>
      
  );
};

Reports.propTypes = {
  getReports: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reports: state.reports,
});

export default connect(mapStateToProps, { getReports })(Reports);
