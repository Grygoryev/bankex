import React from 'react';
import FaceBookIcon from './icons/FaceBookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';

const Social = () => {
    return (
        <div className="social">
            <h2 className="social__title">Follow</h2>
            <div className="social__icons">
                <FaceBookIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </div>
    )
}

export default Social;