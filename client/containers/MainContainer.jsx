
import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions'
import LoginForm from '../components/login';


const mapStateToProps = (state)=>({
    newEmail: state.newEmail,
    newPwd: state.newPwd,
    
});

const mapDispatchToProps = (dispatch) => ({
    setEmail: (newEmail) => (dispatch(actions.setEmail(newEmail))),
    setPwd: (newPwd) => (dispatch(actions.setPwd(newPwd))),
    validateUser: (user) => (dispatch(actions.validateUser(user)))
});

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Main Container</h1>
                
                <LoginForm {...this.props}></LoginForm>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);