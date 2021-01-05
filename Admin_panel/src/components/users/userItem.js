import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpdateUserStatus } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { ToastContainer } from "react-toastify";
 const UserItem = ({user,index,currentPage, blockToggle,selection}) => {
    return (
    <Fragment>
      {user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          
        <tbody>
        <tr role="row" className="odd">
                              <td className="py-0 sorting_1">{user._id}</td>
                              <td className="py-0">{user.firstname+" "+ user.lastname}</td>
                              <td className="py-0">{user.email}</td>

                              <td className="py-0">+1-541-754-3010</td>
                              <td className="py-0">
                                <div className="btn-group mr-1 mb-1">
                                  <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                  <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                                    <a className="dropdown-item uppercase" href="view-user.html"><i className="fa fa-eye" />View</a>
                                    <a className="dropdown-item uppercase" href="#_"><i className="fa fa-ban" />Block</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
       { 
       
       
       
      //  <tr role="row" className="odd">
      //       <td>{user._id}</td>
      //       <td>{user.firstname}</td>
      //       <td>{user.lastname}</td>
      //       <td>{user.email}</td>
      //       <td>{user.status == 0?"blocked":"active"}</td>
      //       <td>
      //         <div className="btn-group mr-1 mb-1">
      //           <button
      //             type="button"
      //             className="btn  btn-drop-table btn-sm"
      //             data-toggle="dropdown"
      //             aria-haspopup="true"
      //             aria-expanded="false"
      //           >
      //             {' '}
      //             <i className="fa fa-ellipsis-v" />
      //           </button>
      //           <div
      //             className="dropdown-menu"
      //             x-placement="bottom-start"
      //             style={{
      //               position: 'absolute',
      //               transform:
      //                 'translate3d(4px, 23px, 0px)',
      //               top: '0px',
      //               left: '0px',
      //               willChange: 'transform',
      //             }}
      //           >
      //             <Link
      //               className="dropdown-item"
      //               to={`/users/${user._id}`}  
      //             >
      //               <i className="fa fa-eye" />
      //               VIEW{' '}
      //             </Link>
      //             { selection===1?(<a
      //               className="dropdown-item"
      //               onClick={e => blockToggle(user._id,0)}
      //             >
      //               <i className="fa fa-ban"  ></i>Block{' '}
      //             </a>):
      //           (
      //             <a
      //             className="dropdown-item"
      //             onClick={e => blockToggle(user._id,1)}
      //           >
      //             <i className="fa fa-ban"  ></i>unBlock{' '}
      //           </a>)}
                 
      //           </div>
      //         </div>
      //       </td>
      //     </tr>
 
 
 }
        
     
      </tbody>


      
      </Fragment>
    )
      }
    </Fragment>
    )
}

UserItem.propTypes = {
 
  // UpdateUserStatus:PropTypes.func.isRequired
  


};


export default connect(null, {})(UserItem);

