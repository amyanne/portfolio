import React, { Component } from 'react';
import SocialMediaButtons from 'react-social-media-buttons';





export class Contact extends Component {
    

    render() {
        return(
            <div className="page-contact">
                <h1>Let's Talk!</h1>
                <h2 className="details">amywestcott01@gmail.com</h2><br></br>
                <SocialMediaButtons
                    links={['https://twitter.com/AmyWestcott6',' https://github.com/amyanne','https://www.linkedin.com/in/amy-westcott/']}
                    buttonStyle={{width: '55px', height: '55px', margin: '0px 26px', backgroundColor: '#000000', borderRadius: '50%'}}
                    iconStyle={{color: '#ffffff'}}
                    openNewTab={true}
                />
            </div>

        )
    }
}

export default Contact;
