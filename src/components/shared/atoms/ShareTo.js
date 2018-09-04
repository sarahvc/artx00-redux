import React from 'react';
import { TwitterShareButton, TelegramShareButton, FacebookShareButton, FacebookIcon, TwitterIcon, TelegramIcon } from 'react-share';

const ShareTo = () => {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    return (
        <div className='d-flex'>
            <FacebookShareButton 
                url={shareUrl}
                quote={title}
                className="mr-2">
                <FacebookIcon
                    size={32}
                    round />
            </FacebookShareButton> 
            <TwitterShareButton
                url={shareUrl}
                quote={title}
                className="mr-2">
                <TwitterIcon
                    size={32}
                    round />
            </TwitterShareButton>
            <TelegramShareButton
                url={shareUrl}
                quote={title}
                className="">
                <TelegramIcon
                    size={32}
                    round />
            </TelegramShareButton>
        </div>
    );
};

export default ShareTo;