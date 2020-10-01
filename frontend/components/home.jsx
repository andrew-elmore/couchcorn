import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { createNewListItem } from '../actions/list';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            video: {},
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogout() {
        this.props.logout()
            .then(() => this.props.history.push('/login'));
    }


    handleChange(event) {
        this.setState({ searchValue: event.target.value })
        if(event.target.value.length === 0){
            this.props.history.push('/videos');
        } else {
            this.props.history.push({
                pathname: '/search',
            });
            this.props.history.push({
                search: event.target.value
            })
        }
    }

    dropBar() {

        return(
            <div className="dropbar-anchor">


                <Link to={`/mylist`}>My List</Link>

                <div className="logout">
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }

    searchZone(){
        return(
            <div className="search-bar-anchor">
                <div className='search-bar'>
                    <form>
                        <input type="text" onChange={this.handleChange} value={this.state.searchValue} />
                    </form>
                </div>
            </div>
        )
    }


    render () {
        
        return (
            <div className="topbar">
                <div className="home">
                    <Link to={`/`}>COUCHCORN</Link>
                </div>
                {this.searchZone()}
                {this.dropBar()}
            </div>
        )
    }
}


const mstp = (state) => ({
});

const mdtp = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mstp, mdtp)(Home)