import React from 'react';
import { connect } from 'react-redux';
import { createNewAccount } from '../../actions/session';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account_email: '',
            password: ''
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
        this.props.createNewAccount(this.state)
            .then(() => this.props.history.push('/'));
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
        return (
            <div className="signup" >
                    <span className="heading"><Link to={`/login`}>Sign In</Link></span>
                <div>
                    <div className="freebanner">Enjoy your first month. It's free.</div>
                    <h2>Create a password to start your free month.</h2>
                    <h3>Just a few more steps and you're done! We hate paperwork, too.</h3>
                    {this.renderErrors()}
                    <form>
                        <label>Email:
                            <input type="text" 
                            value={this.state.account_email} 
                            onChange={this.handleChange('account_email')}/>
                        </label>

                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />
                        </label>

                        <button onClick={this.handleSubmit}>CONTINUE</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, { errors }) => {
    return ({
        errors: state.errors,
    })
};

const mapDispatchToProps = dispatch => ({
    createNewAccount: formAccount => dispatch(createNewAccount(formAccount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);