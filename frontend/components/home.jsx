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
            return(
               null
            )
        } else {
            return (
                <div>
                    <div className="dropbar" onMouseLeave={() => this.pannelHiddenTrueFalse(this.state)}>
                        <div className="logout">
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
                <div className="search-bar-anchor" onClick={() => this.searchHiddenTrueFalse(this.state)}>&#128269;</div>
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
        let trueFasle = !state.searchHidden
        this.setState({searchHidden: trueFasle})
    }


    render () {
        
        return (
            <div className="topbar">
                <div className="home">
                    <Link to={`/`}>COUCHCORN</Link>
                    <Link to={`/mylist`}>My List</Link>
                </div>
                {this.searchZone()}
                <div className="dropbar-anchor" onMouseEnter={() => this.pannelHiddenTrueFalse(this.state)} >
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