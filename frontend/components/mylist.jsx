import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class myList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        fetchList()
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
    debugger
    return ({

    })
};

const mdtp = (dispatch) => ({
    fetchVideo: account_id => dispatch(fetchVideo(account_id)),
})

export default connect(mstp, mdtp)(myList)
