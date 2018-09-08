import React, { Component } from 'react';

export default class PlayPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showPlay: true
        };
    }
    render () {
        return (
            <div>
                {
                    this.state.showPlay && <div className='art-play-container position-absolute mx-auto artx-gradient-outter'>
                        <div className='artx-gradient-inner ap-9'>
                            <p className='artx-type-et text-white'>ARTX AI will create <i>Genesis</i>, a digital artwork, using blockchain-based transaction data from the auction. <i>Genesis</i> is probably the most expensive and important artwork created on blockchain! Don&apos;t miss your chance to be a part of history!</p>
                            <button className='d-block mx-auto btn btn-link text-warning artx-type-twf' onClick={()=>this.setState({showPlay: false})}>Play Now</button>
                        </div> 
                    </div>
                } 
            </div>   
        );
    }
}