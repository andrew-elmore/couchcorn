# Couchcorn

## Overview

   Couchcorn is site where subscribers can sign up and view videos of interesting places from the comfort of their couch. This site uses rails for all backend work, react/redux for all frontend work, and all videos and thumbnails are hosted on AWS.
   
## Sign In and Sign Up

   A user can easily sign in by entering the demo user email **name@website.com** and the demo password **password** and pressing the **Log In!** button. 

   ![login](/app/assets/images/login.png)

   A user can also create their own account by pressing the **Sign up now** link. They will then be taken to the sign up page where they can enter a new email address and password and pressing **CONTINUE**. They will then be signed in and brought to the home page. If a user already has an account, they can click the **Sign In** link at the upper right hand corner of the page and be brought back to the sign in page.

   ![signup](/app/assets/images/signup.png)

## Homepage and Categories

Each video is assigned to one or more categories based on the subject of the video to allow users to easily find the video which interests them most. Clicking on a video takes the user to view that video. If a category has more than 6 videos use the buttons on either side to scroll. 

![homepage](/app/assets/images/homepage.png)


## Video Thumbnails

A thumbnail is an independent component, this was done to allow a uniform appearance in each feature where a thumbnail is required. This also allows for easy implementation of new features or refactoring of existing features.

```
    <div className='video-thumbnail'>
        <div className="button">
            <button onClick={() => props.createListItem({video_id: props.video.id, account_id: props.account_id})}>+</button>
        </div>
        <Link to={`/videos/${props.video.id}`}>
            <p>{props.video.title}</p>
            <img src={props.video.thumbnailurl}/>
        </Link>
    </div>
```


## Search

A user can search for videos by title by pressing the eyeglass icon on the top bar and typing in a part or all of the title. The search function fetches all videos from the database and stores them in the redux store. The videos are then filtered on the frontend. 


```
    let videos = []
    let searchValue = this.state.searchValue
    let idList = this.props.list.map(video => video.id)
    if (this.props.videos.length != 0) {
        this.props.videos.forEach(video => {
            let currentSearchVal = searchValue.slice(1, searchValue.length).toLowerCase()
            let title = video.title.toLowerCase()
            if (title.search(currentSearchVal) != -1){
                videos.push(video)
        }
    })
```

## My List

