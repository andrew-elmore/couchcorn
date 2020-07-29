import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';



class Videos extends React.Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        debugger
        this.props.logout()
            .then(() => this.props.history.push('/login'));
    }

    render () {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
                <h1>Login Sucessful. You are home!</h1>
            </div>
            )
    }
}


const mstp = (state) => ({
});

const mdtp = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(Videos)