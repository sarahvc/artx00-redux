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
        this.classSwitch = this.classSwitch.bind(this);
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

    classSwitch(param) {
        switch(param) {
            case 1:
                return ' artx-play-start-end mx-auto';
            case 2:
                return ' artx-play-auction-intro';
            case 3:
                return ' artx-play-earnings-intro';
            case 4:
                return ' artx-play-timer-intro';
            case 5:
                return ' artx-play-start-end mx-auto';
            default:
                return null;
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.showPlay && <div className={'artx-play-container position-absolute artx-gradient-outter'+ this.classSwitch(this.state.step)}>
                        <div className='artx-gradient-inner ap-9'>
                            {this.renderSwitch(this.state.step)}
                        </div> 
                    </div>
                } 
            </div>   
        );
    }
}