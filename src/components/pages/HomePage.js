// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

//import { fetchAuctionDetails } from '../state/actions/AuctionDetailsActions';

import FirstIntro from '../home/FirstIntro';
//import { BidPopup } from '../Bid/BidPopup';
import AuctionDetails from '../home/AuctionDetails';
import Middle from '../home/Middle';
import SecondIntro from '../home/SecondIntro';
import { Subscribe } from '../Subscribe/Subscribe';
import Footer from '../shared/atoms/Footer';

// COMPONENT
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPrice: '12345',
            diffAppraisal: '1234',
            jackpot: '1234',
            rewards: '123'
        };
    }

    // componentDidMount() {
    //     this.props.fetchAuctionDetails();
    // }

    render() {
        return (
            <div className='artx-gradient-bg'>
                <main className='container pt-5 mt-5'>
                    <FirstIntro currentPrice={this.state.currentPrice}/>
                    <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14'>Bid <i className="fas fa-gavel"></i></button>
                    <AuctionDetails diffAppraisal={this.state.diffAppraisal} jackpot={this.state.jackpot} rewards={this.state.rewards}/>
                    <Middle/>
                    <SecondIntro/>
                    <Subscribe/>
                </main>
                <Footer/>
            </div>
        ); 
    }
}

/*
HomePage.propTypes = {
    fetchAuctionDetails: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    details: PropTypes.object
};
  
// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, details } = state.auctionDetails;

    return { fetching, fetched, failed, details };
};

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchAuctionDetails }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(HomePage);

// EXPORT COMPONENT

export { hoc as HomePage };
*/
export default { HomePage };