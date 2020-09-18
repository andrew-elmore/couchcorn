import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class myList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div className='myList'>
                
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

export default connect(mstp, mdtp)(myList)
