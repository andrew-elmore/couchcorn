# Couchcorn

## Overview

   Couchcorn is site where subscribers can sign up and view videos of interesting places from the comfort of their couch. This site uses rails for all backend work, react/redux for all frontend work, and all videos and thumbnails are hosted on AWS.
   
## Sign In and Sign Up

   A user can easily sign in by entering the demo user email **name@website.com** and the demo password **password** and pressing the **Log In!** button. 

   ![login](/app/assets/images/login.png)

   A user can also create their own account by pressing the **Sign up now** link. They will then be taken to the sign up page where they can enter a new email address and password and pressing **CONTINUE**. They will then be signed in and brought to the home page. If a user already has an account, they can click the **Sign In** link at the upper right hand corner of the page and be brought back to the sign in page.

   ![signup](/app/assets/images/signup.png)

## Homepage and Categories

Each video is assigned to one or more categories based on the subject of the video to allow users to easily find the video which interests them most. Clicking on a video takes the user to view that video. A user can also logout by pressing the logout button on the upper right hand corner of the page. 

![homepage](/app/assets/images/homepage.png)


Each thumbnail is its own independent item component. This was done to make upcoming features such as a individual page for each category easier to execute. 

```
    const VideoThumbnail = props => {
        return (
            <div className='video'>
                <Link to={`/videos/${props.video.id}`}>
                    <p>{props.video.title}</p>
                    <img src={props.video.thumbnailurl}/>
                </Link>
            </div>
        )
    }
```

## Video

Once a user clicks on a video they will be taken the viewer for that video. They are able to watch the videohere and can return to the homepage by clicking the **COUCHCORN** logo at the top left corner. They can alsolog out by pressing the **Logout** button at the top right hand corner. 

![video](/app/assets/images/video.png)

## Future Development Ideas

- Allow users to have their own custom list which will appear as the last category on the homepage. 
- Each account will have at least one, and can have up to five users.
- Include a search feature which will allow users to search for a video by name.
- Include a seperate page for each category which can be accessed by clicking on the category name.
    