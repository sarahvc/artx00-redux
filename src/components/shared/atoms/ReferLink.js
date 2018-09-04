import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ReferLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false
        };
    }

    render() {
        const { link, account } = this.props;
        const { copied } = this.state;

        const baseUrl = 'http://decentralism.io/';
        const subClass = account ? 'artx-refer-account border-bottom' : 'artx-refer-popup';

        return (
            <div>
                <div className={subClass}>
                    <input type='text' readOnly 
                        className={
                            account
                                ? 'text-white artx-type-tw border-0 w-100'
                                : 'text-white artx-type-et'
                        }
                        id='artxRL' value={`${baseUrl}${link}`}
                    />
                    {
                        account
                            ? <button type='button' className="artx-icon-btn text-white"><i className="far fa-copy artx-type-twf artx-gradient-text" onClick={() => this.setState({copied: true})}></i></button>
                            : <button type='button' className="artx-type-et artx-btn py-1 px-2 text-white mx-4" onClick={() => this.setState({copied: true})}>Copy</button>
                    }
                </div>
                { copied && <span className='text-warning'>Link copied.</span>}
            </div>
        );
    }
 
}

ReferLink.propTypes = {
    link: PropTypes.string.isRequired,
    account: PropTypes.bool
};