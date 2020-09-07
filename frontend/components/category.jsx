import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import VideoThumbnail from './videothumbnail'



class Category extends React.Component {


    componentDidMount() {
        this.props.fetchCategories()
    }

    scroll(category){
        console.log(category)
        category.videos.push(category.videos.shift())
    }

    render() {
        const { categories } = this.props;
        if (categories === undefined) {
            return (<div className="categories">No Categories</div>)
        }
        
        return (
            <div className="categories">
                {categories.map(category => 
                    <div className="category" key={category.name}>
                    <h1 key={category.id}>{category.name}</h1>
                    <ul>
                        {Object.values(category.videos).map(video => 
                            <li key={`${category.name}-${video.id + 1}`}>
                                <VideoThumbnail video={video}/>
                            </li>
                        )}
                        <div 
                        id={`${category.name}-${0}`} 
                        className="category-scroll"
                        onClick={() => {this.scroll(category)}}
                        >
                            {`>`}
                        </div>
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