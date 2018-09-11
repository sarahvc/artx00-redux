import React, { Component } from 'react';
import Start from './Start';
import AuctionIntro from './AuctionIntro';
import EarningsIntro from './EarningsIntro';
import TimerIntro from './TimerIntro';
import Play from './Play';

export default class PlayPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            step: 1,
            showPlay: true
        };
        this.renderSwitch = this.renderSwitch.bind(this);
        this.close = this.close.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    close() {
        this.setState({showPlay: false});
    }

    nextStep() {
        this.setState(prevState => ({step: prevState.step + 1}));
    }

    renderSwitch(param) {
        switch(param) {
            case 1:
                return (<div><Start skip={this.close} start={this.nextStep}/></div>);
            case 2:
                return (<div><AuctionIntro next={this.nextStep}/></div>);
            case 3:
                return (<div><EarningsIntro next={this.nextStep}/></div>);
            case 4:
                return (<div><TimerIntro next={this.nextStep}/></div>);
            case 5:
                return (<div><Play play={this.close}/></div>);
            default:
                return null;
        }
    }
    render () {
        return (
            <div>
                {
                    this.state.showPlay && <div className='art-play-container position-absolute mx-auto artx-gradient-outter'>
                        <div className='artx-gradient-inner ap-9'>
                            {this.renderSwitch(this.state.step)}
                        </div> 
                    </div>
                } 
            </div>   
        );
    }
}