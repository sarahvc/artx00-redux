import React from 'react';
import { TwitterShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

const ShareTo = () => {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    return (
        <div className='d-flex'>
            <FacebookShareButton 
                url={shareUrl}
                quote={title}
                className="mr-2 artx-share-btn text-center">
                <i className="fab fa-facebook-f artx-type-tw"></i>
            </FacebookShareButton> 
            <TwitterShareButton
                url={shareUrl}
                quote={title}
                className="mr-2 artx-share-btn text-center">
                <i className="fab fa-twitter artx-type-tw"></i>
            </TwitterShareButton>
            <TelegramShareButton
                url={shareUrl}
                quote={title}
                className="artx-share-btn text-center">
                <i className="fab fa-telegram-plane artx-type-tw"></i>
            </TelegramShareButton>
        </div>
    );
};

export default ShareTo;