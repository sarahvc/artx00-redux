import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { placeBid } from '../state/actions/PlaceBidActions';
import { BidFormComponent } from './BidFormComponent';
import { fetchAuctionPrice } from '../state/actions/AuctionPriceActions';

class BidPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openBid = this.openBid.bind(this);
    }

    onSubmit(values) {
        this.props.placeBid(values);
    }

    openBid(){
        this.props.fetchAuctionPrice();
        this.setState({isOpen: true});
    }

    componentDidMount() {
        this.props.fetchAuctionPrice();
    }

    componentWillUnmount() {
        this.props.fetchAuctionPrice();
    }

    render() {
        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={this.openBid}>Bid <i className="fas fa-gavel"></i></button>
                { this.state.isOpen
                    ? <div className='artx-bid-container position-absolute artx-gradient-outter'>
                        <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                            <BidFormComponent onSubmit={this.onSubmit} buyprice={this.props.price + ''}/>
                            <p className='text-white'>{this.props.failed+''}</p>
                            <p className='text-white'>{this.props.fetching+''}</p>
                            <p className='text-white'>{this.props.fetched+''}</p>
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

BidPopup.propTypes = {
    placeBid: PropTypes.func.isRequired,
    bidPlaced: PropTypes.bool.isRequired,

    fetchAuctionPrice: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,

    bid: PropTypes.string
};

const mapStateToProps = state => {
    const bidState = state.placeBidTo;
    const bidPlaced = bidState.fetched;
    const bid = bidState.bid;

    const priceState = state.AuctionPrice;
    const price = priceState.price;
    const failed = priceState.failed;
    const fetching = priceState.fetching;
    const fetched = priceState.fetched;
  
    return { bidPlaced, bid, failed, fetching, fetched, price };
};
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({ placeBid, fetchAuctionPrice }, dispatch)
);
  
const hoc = connect(mapStateToProps, mapDispatchToProps)(BidPopup);
  
// EXPORT COMPONENT
  
export { hoc as BidPopup };