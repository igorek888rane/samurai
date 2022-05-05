import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};
// let mapDispatchToProps =(dispatch) =>{
//   return{}
// }

let NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
