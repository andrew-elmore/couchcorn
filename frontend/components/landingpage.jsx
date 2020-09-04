import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account_email: '',
        };
    }

    handleChange(type) {
        
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        
        return (
            <div className="landing">
                <div className='backgroundimg'>
                </div>
                <div className='authtopbar'>
                    <Link className='home' to='/'>COUCHCORN</Link>
                    <Link className='loginbutton' to={`/login`}>Sign In</Link>
                </div>


                <div className='centerpannel'>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div>
                        <input type="text"
                            value={this.state.account_email}
                            onChange={this.handleChange('account_email')} 
                            placeholder={`Email address`}
                        />
                        <Link to={{pathname: `/signup`, state: {test: this.state.account_email}}} >TRY FREE FOR 30 DAYS</Link>
                    </div>
                </div>

                
            </div>
        )
    }
}
// account_email: this.state.account_email

const mstp = (state, ownProps) => {
    return ({
       
    })
};

const mdtp = (dispatch) => ({
    
})

export default connect(mstp, mdtp)(Landing)