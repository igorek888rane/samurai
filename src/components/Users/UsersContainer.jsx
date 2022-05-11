import React from "react";
import { connect } from "react-redux";
import { followAc, setUsersAc, unfollowAc } from "../../redux/usersReducer";
import Users from "./UsersClass";
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAc(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAc(userId));
    },
    setUsers: (users) => {
     
      dispatch(setUsersAc(users));
    },
  };
};

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;
