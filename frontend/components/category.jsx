import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import VideoThumbnail from './videothumbnail'



class Category extends React.Component {


    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        debugger
        const { categories } = this.props;
        if (categories === undefined) {
            return (<div className="categories">No Categories</div>)
        }
        return (
            <div className="categories">
                {categories.map(category => 
                <div className= "category">
                    <h1 key={category.id}>{category.name}</h1>
                    <ul>
                        {Object.values(category.videos).map(video => 
                            <li key={video.id}>
                                <VideoThumbnail video={video}/>
                            </li>
                        )}
                    </ul>
                </div>
                )}
    
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
        categories: Object.values(state.categories)
    })
};

const mdtp = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mstp, mdtp)(Category)