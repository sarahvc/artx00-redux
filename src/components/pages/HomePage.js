// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAuctionDetails } from '../state/actions/AuctionDetailsActions';

import FirstIntro from '../home/FirstIntro';
//import { BidPopup } from '../Bid/BidPopup';
import AuctionDetails from '../home/AuctionDetails';
import Middle from '../home/Middle';
import SecondIntro from '../home/SecondIntro';
import Subscribe from '../home/atoms/Subscribe';
import Footer from '../home/atoms/Footer';

// COMPONENT
class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAuctionDetails();
    }

    render() {
        return (
            <div className='artx-gradient-bg'>
                <main className='container pt-5 mt-5'>
                    <FirstIntro currentPrice={this.props.details.currentPrice}/>
                    <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14'>Bid <i className="fas fa-gavel"></i></button>
                    <AuctionDetails diffAppraisal={this.props.details.diffAppraisal} jackpot={this.props.details.jackpot} rewards={this.props.details.rewards}/>
                    <Middle/>
                    <SecondIntro/>
                    <Subscribe/>
                </main>
                <Footer/>
            </div>
        ); 
    }
}

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