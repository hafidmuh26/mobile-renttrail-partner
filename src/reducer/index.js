import {combineReducers} from 'redux';
import {loged, partnerByAccount} from './login';
import {rents, rentById, rentByIdBorrowed, rentsDone, rentsBorrowed, saved} from './rents';
import {oauthed} from './oauth';
import {signup} from './signup';
import {register, findRegisterById} from './register';
import {profiled} from './profile'
import { savedItem, deletedItemById, itemById, items } from './items';
import {transactions} from './transactions';

export default combineReducers({
  rents,
  rentsBorrowed,
  rentsDone,
  transactions,
  rentById,
  rentByIdBorrowed,
  loged,
  oauthed,
  signup,
  register,
  findRegisterById,
  partnerByAccount,
  profiled,
  savedItem,
  deletedItemById,
  itemById,
  items,
  saved
  
});
