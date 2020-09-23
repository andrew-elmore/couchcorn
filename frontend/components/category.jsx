import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import { fetchList, createListItem, deleteListItem } from '../actions/list';
import VideoThumbnail from './videothumbnail'



class Category extends React.Component {
    constructor(props) {
        super(props);
        this.categoriesLenAndPos = {}
    }

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchList(this.props.account_id)
    }



    scroll(category, num){
        let ul = document.getElementById(`ul-${category.name}`)
        let currentLeft = parseInt(getComputedStyle(ul).left.slice(0, -2)) - 60

        let totalLen = ((Object.keys(category.videos).length) * 220) 


        let adj = 0
        if (num < 0){
            adj = Math.min(currentLeft * -1, 1320)
        } else {
            adj = Math.max(- 1320, -1 * (totalLen + currentLeft - 1320))
        }
        ul.style.left = (`${(currentLeft + (adj)) + 60}px`)
    }

    render() {
        let idList = Object.values(this.props.list).map(video => video.id)
        let account_id = this.props.account_id
        const { categories } = this.props;
        if (categories === undefined) {
            return (<div className="categories">No Categories</div>)
        }
        
        return (
            <div className="categories">
                {categories.map(category => 
                    <div className="category" key={category.name}>
                    <h1 key={category.id}>{category.name}</h1>
                        <div
                            id={`${category.name}-${0}`}
                            className="category-scroll-right"
                            onClick={() => { this.scroll(category, -1) }}>
                            &#8249;
                        </div>
                    <ul id={`ul-${category.name}`}>
                        
                        {Object.values(category.videos).map(video => 
                            <li key={`${category.name}-${video.id + 1}`}>
                                <VideoThumbnail 
                                video={video} 
                                account_id={account_id} 
                                idList={idList} 
                                list={this.props.list}
                                createListItem={this.props.createListItem}
                                deleteListItem={this.props.deleteListItem}
                                />
                            </li>
                        )}
                        
                    </ul>
                        <div
                            id={`${category.name}-${99}`}
                            className="category-scroll-left"
                            onClick={() => { this.scroll(category, 1) }}>
                            &#8250;
                        </div>
                </div>
                )}
    
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
        list: state.list,
        account_id: state.session.currentAccount.id,
        categories: Object.values(state.categories)
    })
};

const mdtp = (dispatch) => ({
    createListItem: listData => dispatch(createListItem(listData)),
    deleteListItem: (listData) => dispatch(deleteListItem(listData)),
    fetchList: account_id => dispatch(fetchList(account_id)),
    fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mstp, mdtp)(Category)
