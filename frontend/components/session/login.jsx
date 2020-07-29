import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session'; 
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account_email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/videos'));
    }
    renderErrors() {
        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // console.log(this.props);
        return (

            
            <div className="signin">
                <div>
                <h2>Sign In</h2>
                { this.renderErrors() }
                <form>
                    <label>Email:
                    <input
                            type="text"
                            value={this.state.account_email}
                            onChange={this.handleChange('account_email')}
                        />
                    </label>

                    <label>Password:
                    <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                        <button onClick={this.handleSubmit}>Log In!</button>
                    </label>
                </form>
                <p className="toneedhelp"><Link to="https://www.netflix.com/LoginHelp">Need help?</Link></p>
                
                <p className="tofacebook"><Link to="https://www.facebook.com">Login with Facebook</Link></p>
                <p className="tosignup">New to Netflix?  <Link to={`/signup`}>Sign up now.</Link></p>

                
                <p className="recaptcha">This page is not protected by Google reCAPTCHA feel free to use it if you are a bot. Learn more.</p>
            </div>
                </div>
        );
    }
}
const mapStateToProps = (state, { errors }) => {
    return({
    errors: state.errors,
})};

const mapDispatchToProps = dispatch => ({
    login: formAccount => dispatch(login(formAccount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
