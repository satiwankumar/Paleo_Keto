import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import lugger from './lugger'
import reports from './reports'
import feedback from './feedbacks'
import category from './category'
export default combineReducers({
  alert,
  auth,
  profile,
  lugger,
  category,
  reports,
  feedback
});
