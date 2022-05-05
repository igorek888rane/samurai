import React from 'react';
import { connect } from 'react-redux';
import News from './News';



let mapStateToProps = (state)=>{
    return {
        state:state,
    }
}
const NewsContainer = connect(mapStateToProps)(News)
export default NewsContainer;
