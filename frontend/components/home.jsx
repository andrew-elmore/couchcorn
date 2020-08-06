import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {video: {}}
        // this.fetchVideos = this.fetchVideos.bind(this)

    }

    handleLogout() {
        this.props.logout()
            .then(() => this.props.history.push('/login'));
    }



    render () {
        
        return (
            <div className="topbar">
                <div className="home">
                    <Link to={`/`}>COUCHCORN</Link>
                </div>

                <div className="logout">
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}


const mstp = (state) => ({
});

const mdtp = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(Home)