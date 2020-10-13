# Couchcorn

## Overview

   Couchcorn is site where subscribers can sign up and view videos of interesting places from the comfort of their couch. This site uses rails for all backend work, react/redux for all frontend work, and all videos and thumbnails are hosted on AWS.
   
## Sign In and Sign Up

When a user arrives on to the site they can either login or sign up. To login a user must press the login button and enter their credentials, or press the demo login button. Once logged in their session is saved with a session token in thier cookies. 

If a user wishes to create an account they must enter thier email and click **TRY FREE FOR 30 DAYS**. This email address will be passed to the sign up container as props. There it will be pre-filled in the sign up input. 

```
   <Link to={{pathname: `/signup`, state: {test: this.state.account_email}}} >TRY FREE FOR 30 DAYS</Link>
```

```
  this.state = {
      account_email: props.location.state.account_email,
      password: ''
  };
```

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

