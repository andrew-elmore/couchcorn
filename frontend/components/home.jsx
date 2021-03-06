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
            searchValue: "",
            pannelHidden: true,
            searchHidden: true,
            user: null
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
        if (this.state.pannelHidden){
        // if (false){
            return(
               null
            )
        } else {
            return (
                <div>
                    <div className="dropbar" onMouseLeave={() => this.pannelHiddenTrueFalse(this.state)}>
                        <div className="dropbar-my-list-link">
                            <Link to={`/mylist`} >My List</Link>
                        </div>
                        <div className="dropbar-about-me-link">
                            <Link to={'/about'} > About Me</Link>
                        </div>
                        <div className="dropbar-logout">
                            <button onClick={this.handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    searchZone(){
        if(this.state.searchHidden){
            return(
                <div className="search-bar-anchor" onClick={() => this.searchHiddenTrueFalse(this.state)}>&#8981;</div>
            )
        } else {
        return(
                <div className="search-bar-anchor" onClick={() => this.searchHiddenTrueFalse(this.state)}>
                    <div className='search-bar'>
                        <form>
                            <input type="text" onChange={this.handleChange} value={this.state.searchValue} />
                        </form>
                    </div>
                </div>
            )
        }
    }

    pannelHiddenTrueFalse(state){
        let trueFasle = !state.pannelHidden
        this.setState({pannelHidden: trueFasle})
    }
    searchHiddenTrueFalse(state){ 
        this.setState({searchHidden: false})
    }


    render () {
        
        return (
            <div className="topbar">
                <div className="home">
                    <div className="my-home-link">
                        <Link to={`/`} >COUCHCORN</Link>
                    </div>
                    <div className="my-list-link">
                        <Link to={`/mylist`} >My List</Link>
                    </div>
                    <div className="about-me-link">
                        <Link to={'/about'} > About Me</Link>
                    </div>
                </div>
                {this.searchZone()}
                <div className="dropbar-anchor" onMouseEnter={() => this.pannelHiddenTrueFalse(this.state)} > C
                    {this.dropBar()}
                </div>
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