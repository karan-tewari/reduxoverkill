import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Dashboard = (props) => {
    console.log(props, "props")
    if(props.isLogged === false){
        return <Redirect to="/login"/>
    }
    return(
        <div>
            <div>
                <Navbar />
                <h1>This is Dashboard component</h1>
                <h2>{props.isLogged}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // const { isLogged } = state
    return { isLogged: state.isLogged }
}
  

export default connect(mapStateToProps)(Dashboard);