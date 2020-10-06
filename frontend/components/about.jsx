import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div className='About'>
                <h1>About Me: Andrew Elmore</h1>
                <p>I love the satisfaction of successfully completing a project. I enjoy having an idea or a problem to solve, coming up with a solution and overcoming the challenges that emerge on the road to that solution. That is what I love about software development, every project comes with a unique set of requirements and therefore a unique set of challenges leading to a unique sense of satisfaction when it is completed. My knowledge of React, JavaScript, Redux, HTML, CSS, Ruby on Rails, and the MERN Stack give me the technical ability to find the solution to these challenges.My background as a financial advisor also impressed on me the importance of looking at a project from the users perspective. This ensures that I structure the project in a way that will lead to the best possible experience for that user.</p>
                <p>Email: andrew.elmore93@gmail.com</p>
                <p>Phone: 860-287-6464</p>
                <a href="https://github.com/andrew-elmore" rel="noopener noreferrer" target="_blank">Github</a>
                <a href="https://andrew-elmore.github.io/" rel="noopener noreferrer" target="_blank">Portfolio Site</a>
                <a href="https://www.linkedin.com/in/akelmore/" rel="noopener noreferrer" target="_blank">Linkedin</a>
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

export default connect(mstp, mdtp)(About)
