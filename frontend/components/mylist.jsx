import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../actions/list';


class myList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        fetchList(this.props.account_id)
        debugger
    }

    render(){
        return (
            <div className='myList'>
                List
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    // debugger
    return ({
        account_id: state.session.currentAccount.id,
        list: state.lists
    })
};


const mdtp = (dispatch) => {
    return({
        fetchList: account_id => dispatch(fetchList(account_id)),
    })
}

export default connect(mstp, mdtp)(myList)
