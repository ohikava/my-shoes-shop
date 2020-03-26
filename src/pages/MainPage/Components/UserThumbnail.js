import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../../services/userReducer/actions';

const UserThumbnail = ({username}) => {
  const dispatch = useDispatch();
  return (
    <div className="username">
    <span className="username-name">Hello, {username}</span>
    <span className="username-logout" onClick={() => {
      dispatch(logout());
    }} >logout</span>
    </div>
  );
};

export default UserThumbnail;
