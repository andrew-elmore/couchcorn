import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends React.Component {

    render() {

        return (
            <div className="landing">
                <div className="home">
                    <Link to='/'>COUCHCORN</Link>
                    <img src="app/assets/images/loginBackground.jpg" alt=""/>
                    <Link to={`/login`}>Login</Link>
                    <h1>Unlimited movies, TV<br/>shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <Link to={`/signup`}>Try Free for 30 Days</Link>
                </div>

            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return ({
       
    })
};

const mdtp = (dispatch) => ({
    
})

export default connect(mstp, mdtp)(Landing)