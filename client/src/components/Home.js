import React, { Component } from 'react';
import me from "./amy-pic.jpg"


export class Home extends Component {
    render() {
        return(
            <div className="card">
                    <img className="pic" src={me} alt="img" />
                    <div className="page-home"><h2>Hey I'm Amy Westcott!</h2><h3>I'm a software engineer based in Denver, CO. 
                        I love anything to do with problem solving, whether that be rock climbing, coding, or 
                        writing songs on the guitar. You can find me in the mountains taking my three 
                        legged cat on hikes. </h3> </div>
                </div>
        )
    }
}

export default Home;
